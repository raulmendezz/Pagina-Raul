// POPUP Contactame
const abrirBoton = document.getElementById('abrirPopup');
const cerrarBoton = document.getElementById('cerrarPopup');
const overlay = document.getElementById('overlayPopup');

abrirBoton.addEventListener('click', () => overlay.classList.add('active'));
cerrarBoton.addEventListener('click', () => overlay.classList.remove('active'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('active'); });

// POPUPS Proyectos
function abrirPopupProyecto(cardId, popupId) {
    const card = document.getElementById(cardId);
    const popup = document.getElementById(popupId);
    const cerrarBtn = popup.querySelector('.cerrarProyecto');

    card.addEventListener('click', () => popup.classList.add('active'));
    cerrarBtn.addEventListener('click', () => popup.classList.remove('active'));
    popup.addEventListener('click', (e) => { if (e.target === popup) popup.classList.remove('active'); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') popup.classList.remove('active'); });
}

// Inicializamos popups de proyectos
abrirPopupProyecto('hanfitCard', 'popupHanfit');


// SCROLL Header
const header = document.querySelector('.main-header');
const main = document.querySelector('main');
const scrollArrow = document.querySelector('.scroll-arrow');

function ajustarMain() {
    if (header.classList.contains('scrolled')) {
        main.style.paddingTop = '100px';
        if (scrollArrow) scrollArrow.style.display = 'none'; 
    } else {
        main.style.paddingTop = window.innerHeight + 'px';
        if (scrollArrow) scrollArrow.style.display = 'block'; 
    }
}

window.addEventListener('load', ajustarMain);
window.addEventListener('resize', ajustarMain);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    ajustarMain();
});
//Carrosel

const imagenes = [
    "img/car1/1.png",
    "img/car1/2.png",
    "img/car1/3.png",
    "img/car1/4.png",
    "img/car1/5.png",
    "img/car1/6.png"
];

const carrusel = document.getElementById("carrusel");
let indice = 0;

imagenes.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  if (i === 0) img.classList.add("activa"); 
  carrusel.appendChild(img);
});

const todasLasImagenes = carrusel.querySelectorAll("img");

function cambiarImagen() {
  todasLasImagenes[indice].classList.remove("activa");
  indice = (indice + 1) % imagenes.length;
  todasLasImagenes[indice].classList.add("activa");
}

setInterval(cambiarImagen, 3000);

