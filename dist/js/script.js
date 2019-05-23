if(isDesktop()){AOS.init()}
var mySwiper=new Swiper('.swiper-container',{direction:'horizontal',loop:!0,pagination:{el:'.swiper-pagination',},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',}})
function isDesktop(){if(window.innerWidth<=768&&window.innerHeight<=600){return!1}else{return!0}}
function classToggle(){const navs=document.querySelectorAll('.toggle-menu')
navs.forEach(nav=>nav.classList.toggle('active'))}
document.querySelector('#navbar-toggler').addEventListener('click',classToggle)