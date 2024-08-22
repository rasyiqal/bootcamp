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

//dropdown
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');

    select.addEventListener('click', function() {
        dropdown.classList.toggle('open');
    });

    menu.querySelectorAll('li').forEach(function(item) {
        item.addEventListener('click', function() {
            dropdown.querySelector('.selected').textContent = this.textContent;
            dropdown.classList.remove('open');
            dropdown.querySelector('.menu li.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});

// Menutup dropdown jika klik di luar elemen dropdown
document.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});





