//nav-menu font-type
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('#nav-menu a').forEach(item => item.classList.remove('font-semibold'));
        this.classList.add('font-semibold');
    });
});

//navbar fix
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//hamburger icon
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
    
});





