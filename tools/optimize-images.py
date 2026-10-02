#!/usr/bin/env python3
"""Gera as imagens otimizadas da landing page a partir dos arquivos originais.

Uso (na raiz do projeto):
    python3 tools/optimize-images.py

Requer Pillow (pip install pillow) e a pasta materiais-de-origem/. Os
originais nunca são alterados. Para trocar uma foto, substitua o arquivo de
origem ou edite a lista PHOTOS e rode o script novamente.

O logo recebido tem só 150 px; a página usa a versão vetorizada em
tools/logo/logo.svg. Os ícones e a imagem de compartilhamento saem de:
    node tools/render-compartilhamento.js
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "materiais-de-origem"
SRC = SOURCES / "fotos"
AVATAR_SRC = SOURCES / "avaliacoes"
OUT = ROOT / "assets" / "img"

# Nada é ampliado: a maior versão gerada é a do recorte original (ou 1600 px,
# no caso da panorâmica do interior, que veio maior).
WIDTHS = (480, 800, 1200, 1600)

# nome de saída -> (arquivo em materiais-de-origem/fotos, área usada ou None)
# A área é (esquerda, topo, direita, base) em pixels do original. As capturas
# trazem uma borda irregular de 2 a 3 px, que fica de fora.
PHOTOS = {
    "espelho": ("Screenshot 2026-10-02 104819.png", (3, 3, 666, 892)),
    "bolsas": ("Screenshot 2026-10-02 104843.png", (3, 3, 665, 892)),
    "alfaiataria": ("Screenshot 2026-10-02 104854.png", (3, 3, 662, 891)),
    "blazer": ("Screenshot 2026-10-02 105840.png", (3, 3, 665, 894)),
    "cafe": ("Screenshot 2026-10-02 110055.png", (3, 3, 664, 889)),
    "copo": ("Screenshot 2026-10-02 110108.png", (3, 3, 665, 887)),
    # versões editadas pelo cliente (02/10/2026), em resolução maior e sem o
    # texto do post; as capturas originais ficam guardadas, mas não são usadas
    "loja": ("loja-editada.png", None),
    "arara": ("arara-editada.png", None),
}

# Fotos de perfil: nome de saída -> arquivo em materiais-de-origem/avaliacoes
AVATARS = {
    "avaliacao-mariana-ignacio": "Mariana.png",
    "avaliacao-leticia-caroline": "Leticia.png",
    "avaliacao-irineu-pereira": "Irineu.png",
}


def resize_to_width(im: Image.Image, width: int) -> Image.Image:
    if im.width <= width:
        return im.copy()
    height = round(im.height * width / im.width)
    return im.resize((width, height), Image.LANCZOS)


def save_set(im: Image.Image, name: str) -> None:
    largest = im
    for width in WIDTHS:
        if width < im.width:
            out = resize_to_width(im, width)
            out.save(OUT / f"{name}-{width}.webp", "WEBP", quality=82, method=6)
    if im.width <= WIDTHS[-1]:
        im.save(OUT / f"{name}-{im.width}.webp", "WEBP", quality=82, method=6)
    else:
        largest = resize_to_width(im, WIDTHS[-1])
    largest.save(OUT / f"{name}-{largest.width}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
    print(f"{name}: original {im.width}x{im.height}, maior versão {largest.width}x{largest.height}")


def build_photos() -> None:
    for name, (source, area) in PHOTOS.items():
        im = Image.open(SRC / source).convert("RGB")
        save_set(im.crop(area) if area else im, name)


def build_avatars() -> None:
    """Mantém o tamanho e a transparência originais (72x72 px)."""
    for name, source in AVATARS.items():
        im = Image.open(AVATAR_SRC / source).convert("RGBA")
        im.save(OUT / f"{name}.png", optimize=True)
        im.save(OUT / f"{name}.webp", "WEBP", quality=90, method=6)
        print(f"{name}: {im.width}x{im.height}")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    build_photos()
    build_avatars()
    total = sum(f.stat().st_size for f in OUT.iterdir())
    print(f"{len(list(OUT.iterdir()))} arquivos, {total / 1024:.0f} KB no total")
