if(isDesktop()) {
    AOS.init();
}
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
})
function isDesktop() {
    if(window.innerWidth <= 768 && window.innerHeight <= 600) {
        return false;
    } else {
        return true;
    }
}
function classToggle() {
    const navs = document.querySelectorAll('.toggle-menu')
    navs.forEach(nav => nav.classList.toggle('active'));
}
document.querySelector('#navbar-toggler').addEventListener('click', classToggle);