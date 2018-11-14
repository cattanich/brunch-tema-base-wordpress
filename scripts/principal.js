console.log('\'Made by: \'@cattanich');


window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#F6882C',
        duration: 3000,
        strokeWidth: 10,
        easing: 'easeInOut',
        step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  },
        text: {
    style: {
      color: 'white'

    }}
    });

    circle.animate(0.98);
};


$('.slickcarousel').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    mobileFirst: true,
    cssEase: 'linear'
});

$('.comments').slick({
    dots: false,
    arrows: true,
    prevArrow: '<a class="h2 px-4 mt-5" type="button" class="slick-prev"><i class="fas fa-angle-left"></i></i></a>',
    nextArrow: '<a class="h2 px-4 mt-5" type="button" class="slick-next"><i class="fas fa-angle-right"></i></a>',
    infinite: true,
    speed: 300,
    autoplay: true,
    mobileFirst: true,
    cssEase: 'linear'
});

$('#moveDown').click(function() {

    fullpage_api.moveSectionDown();
});

$('.carousel').carousel({
    interval: 4000,
    pause: true
});

$('.carousel-bg').carousel({
    interval: 5000,
    pause: false
});


$('.carousel-offer').carousel({
    interval: 5000,
    pause: true
});


$('.carousel').swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: 'vertical',
    durationThreshold: '800ms'

});


$('#collapseExample').on('show.bs.collapse', function() { $('.esconder').addClass('d-none'); });
$('#diss').click(function() { $('.esconder').removeClass('d-none'); });
$('#diss2').click(function() { $('.esconder').removeClass('d-none'); });



// $('#collapseExample').on('shown.bs.collapse', function () {
//   $('.esconder').removeClass('d-none');
// });


AOS.init();

$('video').each(function() {
    enableInlineVideo(this);
});

// $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//         $('.bg-dark').stop().animate({
//             opacity: 0.9
//         }, 500);
//     } 
//     else {
//         $(".bg-dark").stop().animate({
//             opacity: 0.3
//         }, 500);
//     }

// });

$(window).scroll(function() {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 100) {

        $('.parabg').addClass('bg-dark2');

    } else {

        $('.parabg').removeClass('bg-dark2');

    };
});


// $('.scroll').on('click', function(e){    
//    e.preventDefault()

//   $('html, body').animate({
//       scrollTop : $(this.hash).offset().top
//     }, 1500);
// });

// $('.parallax-window').parallax({imageSrc: '/images/get-in-love-default-background.jpg'});

new fullpage('#fullpage', {

    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['home', 'get-in-love', 'galapagos-cruises', 'offers-news', 'our-customers-say', 'pie'],
    fitToSection: false,
    autoScrolling: false,
    // navigation: true,
    // navigationPosition: 'left',
    // navigationTooltips: ['HOME', 'GET IN LOVE', 'GALAPAGOS CRUISES', 'OFFERS-NEWS', 'OUR CUSTOMERS SAY', 'ABOUT US'],
    // responsiveWidth: '800',
    scrollBar: false,
    slideSelector: '.slides',
    verticalCentered: false
    // scrollOverflow: true,

    // sectionsColor: ['#282923', '#282923', '#282923', '#282923', '#282923']
    // fixedElements: '#mimenu, .parabg',
    // menu: '#mimenu',
    // bigSectionsDestination: 'top'
    // loopBottom: true,
    // scrollBar: true,
    // continuousVertical: true,
    // scrollOverflow: true,

    // controlArrows: false


});




// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
$(function() { $('[data-toggle="popover"]').popover(); });


// $('.carousel').carousel({
//   interval: 3000
// });

//     $(document).ready(function () {
//       setImageOne();
//     });

//     function setImageOne() {
//       $('#imageSwap').fadeIn(500).html('<img src="https://placeimg.com/640/480/arch" />').delay(2000).fadeOut(500, function () { setImageTwo(); });
//     }

//     function setImageTwo() {
//       $('#imageSwap').fadeIn(500).html('<img src="https://placeimg.com/640/480/arch/sepia" />').delay(2000).fadeOut(500, function () { setImageOne(); });
//     };

///

// $(window).scroll(function() {
//    if ($(window).scrollTop() > 100 ){


//     $('#kitten').find("img").fadeOut();

//       } else {

//     $('#kitten').find("img").fadeIn();

//   }

//   })

$(document).ready(function() {
    var myElement = $('#kitten').find('img');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        myElement.css({
            'opacity': 1 - st / 200
        });
    });
});


$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass('show');
    });


    return false;
})
////

// $(window).scroll(function(){
//     $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

// $("#kitten").hover(function(){

//     $(this).find("img").fadeOut();

// }, function() {

//     $(this).find("img").fadeIn();

// })