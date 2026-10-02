// Gera, a partir de tools/logo/logo.svg, das fontes e das fotos do site:
//   assets/img/favicon-32.png, icon-192.png, apple-touch-icon.png   o "B" do logo sobre o marfim (o logo inteiro fica ilegível em 32 px)
//   assets/img/compartilhamento.jpg                                   1200x630 para WhatsApp e redes
//
// Uso (na raiz do projeto, depois de python3 tools/optimize-images.py):
//   node tools/render-compartilhamento.js
//
// Requer Node e Playwright com Chromium. Se o Playwright não estiver instalado
// neste projeto, informe os caminhos pelas variáveis de ambiente
// PLAYWRIGHT_MODULE (pasta node_modules/playwright) e CHROMIUM_PATH.
const path = require('path');
const fs = require('fs');
const os = require('os');

const playwrightModule = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(playwrightModule);

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'assets/img');
const logo = fs.readFileSync(path.join(root, 'tools/logo/logo.svg'), 'utf8');
// o logo herda a cor do elemento pai (fill="currentColor")
const mark = (width) => logo.replace(/width="[\d.]+" height="[\d.]+"/, `width="${width}" height="auto"`);
// ícone: só o "B" (recorte do viewBox na letra, medido no SVG)
const letterB = (size) => logo
  .replace(/viewBox="[^"]+"/, 'viewBox="483 364 168 398"')
  // a caixa do SVG tem a proporção do recorte (168 x 398); fora dela, o resto do logo fica cortado
  .replace(/width="[\d.]+" height="[\d.]+"/, `width="${Math.round(size * 168 / 398)}" height="${size}"`)
  .replace('<svg ', '<svg preserveAspectRatio="xMidYMid meet" style="overflow:hidden" ');

const fontFace = (family, file, style = 'normal') => `@font-face { font-family: "${family}"; src: url("file://${path.join(root, 'assets/fonts', file)}") format("woff2"); font-style: ${style}; font-weight: 300 700; }`;
const fonts = [fontFace('Libre Caslon Display', 'libre-caslon-display-normal-latin.woff2'), fontFace('Karla', 'karla-normal-latin.woff2')].join('\n');

const photo = fs.readdirSync(out).filter((f) => /^espelho-\d+\.jpg$/.test(f)).sort().pop();

const icon = (size, inner) => ({
  w: size, h: size,
  html: `<div style="width:${size}px;height:${size}px;background:#f7f4ef;color:#111;display:grid;place-items:center">${letterB(inner)}</div>`,
});

const pages = {
  favicon: { ...icon(32, 26), file: 'favicon-32.png' },
  icon192: { ...icon(192, 150), file: 'icon-192.png' },
  apple: { ...icon(180, 140), file: 'apple-touch-icon.png' },
  card: {
    w: 1200, h: 630, file: 'compartilhamento.jpg', jpeg: true,
    html: `<div style="width:1200px;height:630px;display:grid;grid-template-columns:660px 540px;background:#f7f4ef;color:#111;font-family:Karla,sans-serif;overflow:hidden">
      <div style="display:flex;flex-direction:column;justify-content:center;padding:0 72px">
        <div style="color:#111">${mark(260)}</div>
        <div style="margin-top:44px;font-family:'Libre Caslon Display',serif;font-size:60px;line-height:0.98;letter-spacing:-0.02em">Vista-se do que<br><em style="color:#776a5a">te inspira.</em></div>
        <div style="margin-top:28px;font-size:14px;font-weight:600;letter-spacing:0.26em;text-transform:uppercase;color:#776a5a">Easy Chic Style &nbsp;·&nbsp; Basic &amp; Casual</div>
      </div>
      <img src="file://${path.join(out, photo)}" style="width:540px;height:630px;object-fit:cover;object-position:50% 15%;display:block" alt="">
    </div>`,
  },
};

(async () => {
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const tmp = path.join(os.tmpdir(), 'mecbella-render.html');
  for (const p of Object.values(pages)) {
    const page = await browser.newPage({ viewport: { width: p.w, height: p.h }, deviceScaleFactor: 1 });
    // a página é aberta por file:// para o Chromium aceitar as fontes e a foto locais
    fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${fonts} body{margin:0;background:transparent}</style></head><body>${p.html}</body></html>`);
    await page.goto('file://' + tmp, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot(p.jpeg
      ? { path: path.join(out, p.file), type: 'jpeg', quality: 86 }
      : { path: path.join(out, p.file) });
    await page.close();
    console.log('assets/img/' + p.file);
  }
  fs.unlinkSync(tmp);
  await browser.close();
})();
