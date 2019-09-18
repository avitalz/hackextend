$(document).ready(function() {

    (function () {
        // Mobile nav function
        var mobileNav = document.querySelector('.nav-mobile');
        var toggle = document.querySelector('.nav-list');
        var navItem = $('li.nav-item');

        mobileNav.onclick = function () {
            this.classList.toggle('nav-mobile-open');
            toggle.classList.toggle('nav-active');
        };

        navItem.on('click' , function(){
            mobileNav.classList.toggle('nav-mobile-open');
            toggle.classList.toggle('nav-active');
        })
    })();



    const year = new Date().getFullYear();
    const choosenDate = new Date(year , 10 , 28).getTime();

    let countdown = setInterval(function() {
        const today = new Date().getTime();
        const diff = choosenDate - today;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            "<div class=\"days\"> \
                <div class=\"c-number\">" + days + "</div><div class='c-title'>Days</div></div> \
                <div class=\"hours\"> \
                <div class=\"c-number\">" + hours + "</div><div class='c-title'>Hours</div></div> \
                <div class=\"minutes\"> \
                <div class=\"c-number\">" + minutes + "</div><div class='c-title minutes-title'>Minutes</div></div> \
                <div class=\"seconds\"> \
                <div class=\"c-number\">" + seconds + "</div><div class='c-title seconds-title'>Seconds</div></div> \
                </div>";
        } , 50000);
});