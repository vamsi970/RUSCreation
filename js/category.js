// category.js — renders one category page from ?c=<slug>

const CATEGORIES = {
  "scatters-throws": {
    "title": "Scatters & Throws",
    "desc": "Decorative throw pillows and scatter cushions in linen, cotton, velvet and jacquard weaves.",
    "images": [
      "Images/Product Images/Throws & Scatter/Display Image 2.png",
      "Images/Product Images/Throws & Scatter/Display Image.jpg",
      "Images/Product Images/Throws & Scatter/Display image.png",
      "Images/Product Images/Throws & Scatter/Scatter 1.png",
      "Images/Product Images/Throws & Scatter/Scatter 2.png",
      "Images/Product Images/Throws & Scatter/Scatter 3.jpg",
      "Images/Product Images/Throws & Scatter/Scatter 3.png",
      "Images/Product Images/Throws & Scatter/Scatter 4.jpg",
      "Images/Product Images/Throws & Scatter/Scatter 4.png",
      "Images/Product Images/Throws & Scatter/Scatter 4].jpg",
      "Images/Product Images/Throws & Scatter/Scatter 5.png",
      "Images/Product Images/Throws & Scatter/Scatter 6.png",
      "Images/Product Images/Throws & Scatter/Scatter 7.png",
      "Images/Product Images/Throws & Scatter/Throws & scatter 2.jpg",
      "Images/Product Images/Throws & Scatter/Throws & scatter 3.jpg",
      "Images/Product Images/Throws & Scatter/Throws & scatter.jpg",
      "Images/Product Images/Throws & Scatter/Throws 1.png",
      "Images/Product Images/Throws & Scatter/Throws 4.jpg",
      "Images/Product Images/Throws & Scatter/Throws 5.jpg",
      "Images/Product Images/Throws & Scatter/Throws.jpg",
      "Images/Product Images/Throws & Scatter/Throws.png"
    ]
  },
  "kitchen-linen": {
    "title": "Kitchen Linen",
    "desc": "Aprons, oven gloves, pot holders and kitchen towels, functional and beautifully designed.",
    "images": [
      "Images/Product Images/KItchen Linen/Bread bag 3.jpg",
      "Images/Product Images/KItchen Linen/Kitchen Display.jpg",
      "Images/Product Images/KItchen Linen/aPRON 1.png",
      "Images/Product Images/KItchen Linen/aPRON 2.png.jpg",
      "Images/Product Images/KItchen Linen/aPRON 4.png.jpg",
      "Images/Product Images/KItchen Linen/dOUBLE GLOVE 1.png",
      "Images/Product Images/KItchen Linen/gLOVE & pOT HOLDER 1.png",
      "Images/Product Images/KItchen Linen/kITCHEN tOWEL & Apron.png",
      "Images/Product Images/KItchen Linen/kITCHEN tOWEL 2.png",
      "Images/Product Images/KItchen Linen/kITCHEN tOWEL.png",
      "Images/Product Images/KItchen Linen/mAIN iMAGE OF kITCHEN.png"
    ]
  },
  "table-linen": {
    "title": "Table Linen",
    "desc": "Tablecloths, placemats, napkins and runners for every occasion, from everyday to festive.",
    "images": [
      "Images/Product Images/Tabel Linen/NAPKINS 1.png",
      "Images/Product Images/Tabel Linen/NAPKINS 2.png",
      "Images/Product Images/Tabel Linen/Picture1.png",
      "Images/Product Images/Tabel Linen/dISPLAY.jpg",
      "Images/Product Images/Tabel Linen/nAPKINS 3.jpg",
      "Images/Product Images/Tabel Linen/nAPKINS 4.jpg",
      "Images/Product Images/Tabel Linen/pLACEMAT 1.png",
      "Images/Product Images/Tabel Linen/pLACEMAT 2.png",
      "Images/Product Images/Tabel Linen/rUNNER 1.jpg.png",
      "Images/Product Images/Tabel Linen/rUNNER 2.jpg.png",
      "Images/Product Images/Tabel Linen/tABLE cLOTH 1.jpg",
      "Images/Product Images/Tabel Linen/tABLE cLOTH 2.jpg",
      "Images/Product Images/Tabel Linen/tABLE cLOTH 3.jpg",
      "Images/Product Images/Tabel Linen/tABLE cLOTH 4.jpg",
      "Images/Product Images/Tabel Linen/tEXTILE Background image.jpg"
    ]
  },
  "bedding": {
    "title": "Bedding",
    "desc": "Duvet covers, quilts and pillow shams in soft, breathable fabrics for restful nights.",
    "images": [
      "Images/Product Images/bedding/Display 2.jpg",
      "Images/Product Images/bedding/Display.jpg",
      "Images/Product Images/bedding/Picture 2.jpg",
      "Images/Product Images/bedding/Picture 3.jpg",
      "Images/Product Images/bedding/Picture 4.jpg",
      "Images/Product Images/bedding/Picture1.jpg",
      "Images/Product Images/bedding/Quilt 1.jpg",
      "Images/Product Images/bedding/Quilt 2.jpg"
    ]
  },
  "kids": {
    "title": "Kids",
    "desc": "Playful cushions, floor puffs and soft furnishings designed for childrens spaces.",
    "images": [
      "Images/Product Images/Kids/Display image.jpg",
      "Images/Product Images/Kids/Floor Cushions.jpg",
      "Images/Product Images/Kids/Kids Floor suchion.jpg",
      "Images/Product Images/Kids/Kids toy.jpg",
      "Images/Product Images/Kids/Picture 3.png",
      "Images/Product Images/Kids/Picture1.jpg",
      "Images/Product Images/Kids/Puff 3.png",
      "Images/Product Images/Kids/Puff 5.png",
      "Images/Product Images/Kids/Shapped Pillow 2.jpg",
      "Images/Product Images/Kids/Shapped Pillow 4.png",
      "Images/Product Images/Kids/Shapped Pillow.jpg",
      "Images/Product Images/Kids/basket 2.png",
      "Images/Product Images/Kids/torage baskets 1.jpg"
    ]
  },
  "christmas-halloween": {
    "title": "Christmas & Halloween",
    "desc": "Festive tablecloths, towels and decor to bring seasonal cheer to every home.",
    "images": [
      "Images/Product Images/Christmas & Hallowen/Kitchen Towel 2.png",
      "Images/Product Images/Christmas & Hallowen/Kitchen Towl 1.png",
      "Images/Product Images/Christmas & Hallowen/Picture1.jpg",
      "Images/Product Images/Christmas & Hallowen/Runner.jpg",
      "Images/Product Images/Christmas & Hallowen/Scatter 2.jpg",
      "Images/Product Images/Christmas & Hallowen/Scatter 3.jpg"
    ]
  },
  "home-accessories-pet": {
    "title": "Wall Art, Pet & Home Accessories",
    "desc": "Wall art, bags and pet essentials that add character to any living space.",
    "images": [
      "Images/Product Images/Home Acessories & Pet/Pet Bed.jpg",
      "Images/Product Images/Home Acessories & Pet/Pet House.jpg",
      "Images/Product Images/Home Acessories & Pet/Pet Toy.png",
      "Images/Product Images/Home Acessories & Pet/Pet carry bag2.jpg",
      "Images/Product Images/Home Acessories & Pet/Picture1.jpg",
      "Images/Product Images/Home Acessories & Pet/Picture2.jpg"
    ]
  },
  "sustainable-wood": {
    "title": "Wood & Décor",
    "desc": "Eco-friendly wooden servingware and decor crafted from responsibly sourced timber.",
    "images": [
      "Images/Product Images/Suistanable wood/12.png",
      "Images/Product Images/Suistanable wood/13.png",
      "Images/Product Images/Suistanable wood/Picture11.png",
      "Images/Product Images/Suistanable wood/Picture2.png",
      "Images/Product Images/Suistanable wood/Picture5.png",
      "Images/Product Images/Suistanable wood/Picture6.png",
      "Images/Product Images/Suistanable wood/Picture7.png",
      "Images/Product Images/Suistanable wood/Picture8.jpg",
      "Images/Product Images/Suistanable wood/Picture9.png",
      "Images/Product Images/Suistanable wood/Wooden Ribbed Salad Servers.jpg",
      "Images/Product Images/Suistanable wood/Wooden Serving Spoons set of 2 - Natural.jpg"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const category = CATEGORIES[params.get('c')];

if (!category) {
  window.location.replace('products.html');
} else {
  document.title = category.title + ' — RUS';
  document.getElementById('catTitle').textContent = category.title;
  document.getElementById('catHeading').textContent = category.title;
  document.getElementById('catDesc').textContent = category.desc;
  document.getElementById('catHeroBg').style.backgroundImage =
    'url("' + category.images[0].replace(/"/g, '%22') + '")';

  const grid = document.getElementById('categoryGrid');
  category.images.forEach((src, i) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'category-photo';
    const img = document.createElement('img');
    img.src = src;
    img.alt = category.title + ' ' + (i + 1);
    img.loading = 'lazy';
    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let current = 0;

  function openLightbox(i) {
    current = i;
    lightboxImg.src = category.images[current];
    lightbox.classList.add('open');
  }
  function closeLightbox() { lightbox.classList.remove('open'); }
  function step(delta) {
    current = (current + delta + category.images.length) % category.images.length;
    lightboxImg.src = category.images[current];
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.id === 'lightboxClose') closeLightbox();
  });
  document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); step(1); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
}
