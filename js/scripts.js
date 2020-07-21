/*********** Index Page *************/

$('#welcome button').on('click', function(event) {
    $('html, body').animate({
        scrollTop: $("#scroll-into-view").offset().top
    }, 1000);
});

// Services Slider
$(document).ready(function() {

    function animateContentColor() {
        var getProductColor = $('.product.active').attr('product-color');


        $('.title').css({
            color: getProductColor
        });

        $('.btn').css({
            color: getProductColor
        });
    }

    var productItem = $('.product'),
        productCurrentItem = productItem.filter('.active');

    $('#next').on('click', function(e) {
        e.preventDefault();

        var nextItem = productCurrentItem.next();

        productCurrentItem.removeClass('active');

        if (nextItem.length) {

            productCurrentItem = nextItem.addClass('active');
        } else {
            productCurrentItem = productItem.first().addClass('active');
        }


        animateContentColor();
    });

    $('#prev').on('click', function(e) {
        e.preventDefault();

        var prevItem = productCurrentItem.prev();

        productCurrentItem.removeClass('active');

        if (prevItem.length) {
            productCurrentItem = prevItem.addClass('active');
        } else {
            productCurrentItem = productItem.last().addClass('active');
        }

        animateContentColor();
    });

    // Ripple
    $('[ripple]').on('click', function(e) {
        var rippleDiv = $('<div class="ripple" />'),
            rippleSize = 60,
            rippleOffset = $(this).offset(),
            rippleY = e.pageY - rippleOffset.top,
            rippleX = e.pageX - rippleOffset.left,
            ripple = $('.ripple');

        rippleDiv.css({
            top: rippleY - (rippleSize / 2),
            left: rippleX - (rippleSize / 2),
            background: $(this).attr("ripple-color")
        }).appendTo($(this));

        window.setTimeout(function() {
            rippleDiv.remove();
        }, 1900);
    });
});


// clients
$('.quotes').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
});

/*********** Contact Page *************/

$('form').on('submit', function(event) {

    event.preventDefault();

    $('form button').html('Working...').attr('disabled', true);

    var name = $('#name').val();
    var email = $('#email').val();
    var location = $('#location').val();
    var message = $('#message').val();

    var visitor = {name: name, email: email, location: location, message: message}
    $.post("contact.php", visitor, function(result){
        $('form').fadeOut( "slow", function() {
            $('#success').fadeIn();
            $('html, body').animate({
                scrollTop: $("#scroll-into-success").offset().top
            }, 1000);
        });
    });

});