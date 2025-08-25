// popup
    const abrirBoton = document.getElementById('abrirPopup');
    const cerrarBoton = document.getElementById('cerrarPopup');
    const overlay = document.getElementById('overlayPopup');

    abrirBoton.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    cerrarBoton.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('active');
    });

    // scroll
    const header = document.querySelector('.main-header');
    const main = document.querySelector('main');

    function ajustarMain() {
        if (header.classList.contains('scrolled')) {
            main.style.paddingTop = '10px';
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