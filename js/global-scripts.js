/*********** Header hide/show*************/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

/*********** Reveal *************/
window.sr = ScrollReveal();
// Index page
sr.reveal('#services-intro');
sr.reveal('#client-testimonials');

// About page
sr.reveal('#team');

//Contact page
sr.reveal('.contact-col_2');

//Services page

articles = document.querySelectorAll('article');

for (var key in articles) {
    if (parseInt(key) !== 0 && typeof(parseInt(key)) === "number") {
        sr.reveal(articles[key])
    }
    // Reveal all articles except first!
}


