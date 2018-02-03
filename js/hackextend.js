(function () {
    // Mobile nav function
    var mobileNav = document.querySelector('.nav-mobile');
    var toggle = document.querySelector('.nav-list');
    mobileNav.onclick = function () {
        this.classList.toggle('nav-mobile-open');
        toggle.classList.toggle('nav-active');
    };
})();