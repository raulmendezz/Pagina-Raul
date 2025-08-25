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

function ajustarMain() {
    if (header.classList.contains('scrolled')) {
        main.style.paddingTop = '100px';
    } else {
        main.style.paddingTop = window.innerHeight + 'px';
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