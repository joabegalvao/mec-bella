# Mec Bella | Landing page

Página única, estática, em HTML, CSS e JavaScript puro. Não há etapa de build
nem dependências de execução: basta servir a pasta.

## Como visualizar

```bash
# na raiz do projeto
python3 -m http.server 4193
# abra http://localhost:4193
```

Qualquer servidor estático funciona (Nginx, Apache, Netlify, Vercel, Hostinger).
Publique `index.html` e a pasta `assets/`. A pasta `tools/` não precisa ir para
o servidor.

### Materiais de origem

Os arquivos enviados pelo cliente ficam reunidos na pasta
`materiais-de-origem/`, que não faz parte do repositório: ela existe só na
pasta local do projeto e é ignorada pelo git. As imagens que o site usa já
estão prontas em `assets/img`.

```
materiais-de-origem/
  logo/          mec bella logo.jpg (150 x 150 px, preto sobre branco)
  fotos/         sete capturas do Instagram e uma panorâmica do interior (1626 x 873)
  avaliacoes/    fotos de perfil de quem avaliou (72 x 72 px)
```

Só é preciso ter os originais para rodar `tools/optimize-images.py`, ou seja,
para trocar ou reprocessar uma foto.

## Dados do cliente

Recebidos em 02/10/2026.

| Dado | Valor |
| --- | --- |
| Nome | Mec Bella |
| Segmento | Loja de roupas e moda feminina |
| Produtos | Roupas femininas e acessórios |
| Frases do Instagram | "Vista-se do que te inspira…" e "Easy Chic Style • Basic & Casual" |
| Público | Mulheres |
| Objetivo | Landing page com qualidade premium, para divulgar a marca |
| WhatsApp | (44) 99865-6977 |
| Telefone fixo | não informado |
| Instagram | https://www.instagram.com/mecbellaloja/ |
| Endereço | Rua Piratininga, 340, Cianorte, PR, 87200-272 |
| Nota | 4,9 no Google |

### Conferido no Google

Em 02/10/2026, o Google Maps mostrava o perfil "Mec Bella" na R. Piratininga,
340, Sl 07, Centro, Cianorte, com **nota 4,9 e 7 avaliações**. A nota confere
com o briefing, e a página a cita, sem o número de avaliações. O Google
mostra o CEP 87200-163; a página usa o do briefing, 87200-272. O mapa
incorporado é carregado pelo endereço, e não pelo nome da loja, para não
exibir a nota nem o CEP divergente dentro do quadro.

### Avaliações como foram recebidas

- **Mariana Ignácio:** Uma das poucas lojas físicas que ainda frequento.
  Ambiente aconchegante, peças lindas, variadas e de qualidade. O atendimento
  é excelente.
- **Leticia Caroline:** Uma loja excelente, com peças de ótima qualidade.
  Super aconchegante 😍
- **Irineu Pereira:** Recomendo melhor loja de roupas e moda feminina em
  Cianorte

Na página: o emoji saiu, e a de Irineu ganhou pontuação ("Recomendo. Melhor
loja de roupas e moda feminina em Cianorte."). A primeira frase da avaliação
de Mariana virou o título da seção "A loja", e as palavras das três
avaliações (aconchegante, atendimento excelente, peças lindas, variadas e de
qualidade) sustentam os quatro itens dessa seção.

## Estratégia

| Definição | Decisão |
| --- | --- |
| Proposta de valor | Uma loja física que vale a visita: duas linhas de roupa que conversam entre si, acessórios, café servido e alguém para ajudar a escolher |
| Principal objeção | "Loja de roupa é tudo igual, e comprar online é mais fácil." A página responde com a frase da cliente ("uma das poucas lojas físicas que ainda frequento") e com o que a loja oferece de experiência |
| Conversão prioritária | WhatsApp, com mensagem por linha (Easy Chic, Basic & Casual, acessórios) |
| Ação secundária | Visitar a loja no centro de Cianorte |
| Ação de apoio | Seguir o Instagram @mecbellaloja |

## Direção visual: editorial de moda

O logo é preto sobre branco, então a cor vem da loja: marfim das paredes,
pedra do sofá, madeira clara. A página é tratada como uma revista de moda:
muito espaço em branco, serifa de display em corpo grande (Libre Caslon
Display) com o destaque em itálico, grotesca leve no texto (Karla), rótulos
em letras espaçadas, linhas finas e botões retos, sem raio, como o desenho do
logo. As fotos têm acabamento de editorial: entram com um leve zoom ao
aparecer na tela e ampliam devagar no hover.

É um layout diferente dos outros projetos de moda desta série (Bacana e
Modelle): hero com a frase da marca em corpo grande e a foto no espelho com a
legenda vertical "Easy Chic Style / Basic & Casual"; seção dos dois estilos
em duas colunas dentro do container, a segunda deslocada para baixo, cada
uma com número editorial e a foto no tamanho em que foi publicada;
panorâmica do interior em toda a largura; avaliações como citações de
revista, com as fotos de perfil em preto e branco; mapa em preto e branco.
Sem gradientes, sem efeitos de vidro, sem emojis como ícones.

## Seções da página

| Ordem | Seção | Âncora | Conteúdo |
| --- | --- | --- | --- |
| 1 | Cabeçalho | | Logo vetorizado, navegação em letras espaçadas e "Falar no WhatsApp". Fixo no topo |
| 2 | Hero | `#inicio` | "Vista-se do que te inspira.", texto, WhatsApp, link para os estilos, nota 4,9 e a foto no espelho com a etiqueta vertical |
| 3 | Os estilos | `#estilos` | Easy Chic Style (alfaiataria) e Basic & Casual (arara), lado a lado com até 460 px cada, cada um com link de WhatsApp próprio |
| 4 | A loja | `#loja` | Panorâmica do interior, a frase da cliente como título, quatro itens (ambiente, café, atendimento, peças) e duas fotos do café |
| 5 | Acessórios | `#acessorios` | Bolsas e cinto, texto, WhatsApp e o blazer com colar |
| 6 | Avaliações | `#avaliacoes` | 4,9 com estrelas e três citações, a de Mariana em destaque |
| 7 | Onde fica | `#onde-fica` | Endereço, WhatsApp, Instagram e mapa |
| 8 | Chamada final | | Logo, "Vista-se do que te inspira.", WhatsApp e Instagram |
| 9 | Rodapé | | Endereço com CEP, contato, como chegar |

Componente de apoio: botão flutuante de WhatsApp, no canto inferior direito,
em todas as telas.

## Estrutura de arquivos

```
index.html                       conteúdo e SEO
assets/css/styles.css            estilos (tokens de cor e tipografia no topo)
assets/js/main.js                menu e revelação na rolagem
assets/img/                      imagens otimizadas (geradas pelos scripts)
assets/fonts/                    Libre Caslon Display e Karla (arquivos locais)
tools/optimize-images.py         gera as fotos e os avatares de assets/img a partir dos originais
tools/logo/logo.svg              logo "mecBELLA" vetorizado a partir do arquivo recebido
tools/render-compartilhamento.js gera os ícones e a imagem de compartilhamento pelo Chromium
materiais-de-origem/             arquivos do cliente (só na pasta local, fora do git)
```

## Imagens recebidas e como foram usadas

| Arquivo | Conteúdo | Tamanho | Onde aparece |
| --- | --- | --- | --- |
| `Screenshot ... 104819.png` | Mulher fotografa o look no espelho: regata off-white e saia plissada marinho | 663 x 889 | hero e imagem de compartilhamento |
| `Screenshot ... 104854.png` | Manequins com alfaiataria cinza e vestido de brilho | 659 x 888 | "Os estilos", Easy Chic |
| `Screenshot ... 131604.png` | Arara com linho, jeans e camisa azul (texto do post por cima, embaixo) | recorte 835 x 557, só a parte sem texto | "Os estilos", Basic & Casual |
| `Screenshot ... 122400.png` | Panorâmica do interior | 1620 x 867, reduzida a 1600 | "A loja", toda a largura |
| `Screenshot ... 110055.png` | Mesa de café: bolo, salgados, suco, copos com a marca | 661 x 886 | "A loja" |
| `Screenshot ... 110108.png` | Copo de café com o logo e saquinho de biscoito | 662 x 884 | "A loja" |
| `Screenshot ... 104843.png` | Bolsas pretas e cinto sobre a mesa | 662 x 889 | "Acessórios" |
| `Screenshot ... 105840.png` | Blazer preto com colar de pérolas no manequim | 662 x 891 | "Acessórios" |

**Nenhuma foto é ampliada**, e um teste automático confere isso em 390 px;
uma conferência extra foi feita em 1920 px, onde uma primeira versão da
seção "Os estilos" esticava as duas fotos até metade da tela (o cliente
notou a perda de nitidez). Agora elas têm no máximo 460 px. As capturas do
Instagram tinham borda irregular de 2 a 3 px, deixada de fora.

Observações:

- A foto do hero mostra uma pessoa (adulta) em uma publicação da própria
  loja. Se for uma cliente ou modelo, vale confirmar a autorização de uso no
  site (veja Pendências).
- O saquinho na foto do copo traz a marca de um fornecedor de biscoito; é
  pequeno e ficou na foto, como material da loja.

### Logo

O logo veio em JPG de 150 x 150 px, pequeno demais para o cabeçalho e os
ícones. Foi **vetorizado** a partir do arquivo (ampliado 8 vezes, suavizado e
traçado com potrace) e está em `tools/logo/logo.svg`; o desenho das letras é
o do original. Por ser vetor com `fill="currentColor"`, ele toma a cor de onde
está: preto no cabeçalho, marfim no fecho e no rodapé. Os ícones do site usam
só o "B", porque o logo inteiro fica ilegível em 32 px.

Se o cliente enviar o logo em vetor, basta trocar o `<path>` do símbolo
`#logo` no `index.html` e o `tools/logo/logo.svg`, e rodar
`node tools/render-compartilhamento.js`.

## Como atualizar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Textos e endereço | `index.html` (seções comentadas) |
| Número e mensagem do WhatsApp | `index.html`: procure por `wa.me/` (9 ocorrências). O texto vem depois de `?text=`, codificado |
| Mapa | `index.html`: procure por `google.com/maps` (4 ocorrências, uma delas no `<iframe>`) |
| Nota | `index.html`: hero (`rating`), seção "AVALIAÇÕES" (`score__value` e título) e JSON-LD |
| Cores e fontes | `assets/css/styles.css`, bloco `:root` |
| Os dois estilos | `index.html`, blocos `duo__item` |
| Itens de "A loja" | `index.html`, lista `traits` |
| Fotos | substitua o original, ajuste a lista `PHOTOS` de `tools/optimize-images.py` e rode o script |
| Avaliações | `index.html`, seção "AVALIAÇÕES". Fotos de perfil: lista `AVATARS` do script |

Mensagens de WhatsApp, conforme o ponto da página:

| Onde | Mensagem |
| --- | --- |
| Cabeçalho, hero, "Onde fica", chamada final, rodapé e botão flutuante | Olá! Vi o site da Mec Bella e quero saber mais sobre as peças. |
| Easy Chic Style | ... quero ver peças da linha Easy Chic. |
| Basic & Casual | ... quero ver peças da linha Basic & Casual. |
| Acessórios | ... quero saber sobre os acessórios. |

Para gerar as imagens (requer Pillow e a pasta `materiais-de-origem/`):

```bash
python3 tools/optimize-images.py        # fotos e avatares
node tools/render-compartilhamento.js   # ícones e imagem de compartilhamento (requer Node e Playwright)
```

Se o Playwright não estiver instalado no projeto, informe os caminhos pelas
variáveis `PLAYWRIGHT_MODULE` e `CHROMIUM_PATH`.

### Título do hero

O título tem duas linhas ("Vista-se do que" e "te inspira." em itálico), e o
tamanho da letra é calculado para a primeira caber na coluna em qualquer
tela. Se o texto mudar, confira a quebra em 320 px e em 900 px. A regra está
em `.hero__title`, no `styles.css`.

### Cache do navegador

Os arquivos de estilo e script são chamados com versão: `styles.css?v=1` e
`main.js?v=1`. Ao alterar um deles, aumente o número no `index.html`.

## Identidade visual

| Token | Cor | Origem |
| --- | --- | --- |
| `--ink` | `#111111` | preto do logo: textos, botões, chamada final e rodapé |
| `--white` | `#FFFFFF` | branco do logo: seções alternadas |
| `--ivory`, `--ivory-deep` | `#F7F4EF`, `#EFE9E0` | marfim das paredes da loja: fundo principal |
| `--stone`, `--stone-700` | `#B9AB9B`, `#776A5A` | pedra do sofá: linhas de destaque, rótulos, destaques em itálico |
| `--line` | `#DDD5C9` | linhas finas |
| `--ink-soft`, `--mist` | `#4A4642`, `#BDB5AA` | textos secundários sobre o claro e sobre o preto |
| `--whatsapp` | `#25D366` | verde oficial do WhatsApp, só no botão flutuante |

Tipografia: Libre Caslon Display (títulos, citações e títulos dos itens, com
o destaque em itálico) e Karla (textos, em peso leve, e rótulos em caixa alta
espaçada).

## Decisões de conteúdo

- Só foram usados dados fornecidos: nome, frases do Instagram, endereço,
  WhatsApp, Instagram, nota, fotos e avaliações. Não há preços, marcas,
  tamanhos, prazos, entrega ou promessas inventadas.
- Os nomes das duas linhas ("Easy Chic Style", "Basic & Casual") são da
  loja. As descrições de cada uma ("alfaiataria leve, blazers, vestidos";
  "camisas, jeans, tricôs e saias") vêm das fotos; a loja pode ajustar.
- "Café, bolo e salgados servidos" vem das duas fotos do café; a página diz
  que "está nas fotos da própria loja". Se o café for só em eventos, ajuste o
  texto do item "Café na loja".
- "Uma das poucas lojas físicas que ainda dá vontade de frequentar" é uma
  adaptação da frase de Mariana, e a página atribui: "A frase é de uma
  cliente".
- "Confirme o horário de atendimento pelo WhatsApp antes de vir" está na
  página porque o horário não foi informado.
- Não há telefone fixo, porque não foi informado.
- O mapa é um mapa do Google incorporado, carregado pelo endereço, em preto e
  branco para combinar com a página. Ele só carrega quando o visitante chega
  perto da seção.
- Não há formulário, porque não existe destino de envio definido.
- A foto do hero não tem legenda por cima; a etiqueta "Easy Chic Style / Basic
  & Casual" fica ao lado.
- O ícone do botão flutuante é escuro sobre o verde, para manter contraste.

## Testes realizados

Executados em 02/10/2026, em Chromium automatizado (Playwright).

- Revisão visual das capturas de tela: página inteira em 390 e 1440 px e
  primeira tela em 320, 768, 1024 e 1440 px.
- Sem rolagem horizontal e com o título do hero em duas linhas nos tamanhos
  320, 360, 390, 480, 600, 768, 900, 1024, 1200, 1440 e 1920 px.
- Sem erros de console e sem imagens quebradas.
- 41 verificações automáticas aprovadas: menu no celular (toque, Esc, toque
  fora, foco), âncoras, botão flutuante de WhatsApp (posição, nome acessível,
  sem cobrir o texto do rodapé), fotos sem ampliação acima do tamanho real,
  mapa com título e carregamento adiado, revelação na rolagem, link de pular
  para o conteúdo, foco visível (contorno de 2 px, preto), destino e
  atributos de todos os links (9 de WhatsApp com 4 mensagens, 3 de Instagram,
  3 de mapa, nenhum destino fora de wa.me, instagram e google), hierarquia de
  títulos e atributos das imagens, sem travessões, emojis ou textos de
  exemplo.
- O mapa foi aberto no teste e mostrou o marcador na R. Piratininga, 340.
- Página utilizável sem JavaScript.
- Animações desligadas quando o sistema pede movimento reduzido.
- Contraste AA em todos os textos (o tom pedra dos rótulos foi escurecido para
  passar: 4,6:1 sobre o marfim).
- Carga inicial no celular abaixo de 700 KB, medida em tela de densidade 3x,
  sem saltos de layout (CLS 0). Página inteira: 448 KB, sem contar o mapa.

Não testado: Safari, Firefox e aparelhos físicos. Dos links externos, foi
conferido apenas o endereço, não o conteúdo de destino. Também não foi
verificado se o número responde no WhatsApp.

## Histórico de ajustes

| Ajuste | Arquivos |
| --- | --- |
| Versão inicial da página | todos |
| Fotos de "Os estilos" limitadas a 460 px, dentro do container, para não ampliar | `styles.css`, `index.html` |

## Créditos e licenças

- Logo, fotos, avaliações e fotos de perfil: fornecidos pelo cliente. Logo
  vetorizado para este projeto a partir do arquivo recebido.
- Ícones: criados para este projeto. Ícone do WhatsApp: Simple Icons (CC0).
- Libre Caslon Display e Karla: SIL Open Font License 1.1, obtidas do Google
  Fonts e hospedadas localmente.
- Mapa: Google Maps, incorporado.

## Pendências que dependem do cliente

- **Autorização de uso da foto do hero** (a mulher no espelho), se for
  cliente ou modelo.
- **Logo em vetor**, para substituir a vetorização feita a partir do JPG de
  150 px.
- Confirmar o CEP: briefing diz 87200-272, Google mostra 87200-163.
- Horário de funcionamento e formas de pagamento.
- Se há entrega, envio ou compra pelo WhatsApp; a página hoje convida a
  provar na loja.
- Marcas vendidas, se quiserem citar.
- Mais fotos de produto, em especial de acessórios além de bolsas.
- Mais avaliações, com autorização de uso do nome e da foto.
- Domínio de publicação, para completar `og:image` com URL absoluta e adicionar
  `link rel="canonical"`.
