const $ = require('jquery');
import bootstrap from "bootstrap";
import AOS from "aos";
const scrollify = require('jquery-scrollify');
// import scrollify from "jquery-scrollify";
import '../styles/sitio.scss';



console.log('hello world')



AOS.init();

$.scrollify({
    section: ".section",
    sectionName: "section-name",
    interstitialSection: '.off-height',
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: ".off-scroll",
    setHeights: true,
    overflowScroll: false,
    updateHash: true,
    touchScroll: true
});


export function disable() {
    $.scrollify.destroy();
};



// // $(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// // });

// ///// CSS & SCSS
// import '../styles/sitio.scss';

// ///// JS
// import jquery from "jquery-commonjs";
// import aos from "aos";
// import fakeloader from "../node_modules/fakeLoader.js/fakeLoader.js";




// ///// SCRIPTS
// console.log('hello world');
// $('a').tooltip({ placement: 'left' });
// $(function() {
//     $('[data-toggle="popover"]').popover()
// });

// AOS.init();

// $("#fakeLoader").fakeLoader({

//     timeToHide: 2000, //Time in milliseconds for fakeLoader disappear
//     zIndex: 1001, // Default zIndex
//     spinner: "", //Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
//     bgColor: "white", //Hex, RGB or RGBA colors
//     imagePath: "" + templateUrl + "/images/dg_logo.png" //If you want can you insert your custom image
//     // imagePath:""+templateUrl+"/assets/SVG-Loaders/svg-loaders/puff.svg" //If you want can you insert your custom image


// });

// $("#intro-fixed").responsiveSlides({
//     auto: true,
//     pager: false,
//     speed: 4500,
//     timeout: 5000
// });

// $('#search').on('show.bs.collapse', function() { $('.esconder').addClass('d-none'); });
// $('#diss').click(function() { $('.esconder').removeClass('d-none'); });
// $('#diss2').click(function() { $('.esconder').removeClass('d-none'); });

// $(window).scroll(function() {
//     // 100 = The point you would like to fade the nav in.

//     if ($(window).scrollTop() > 100) {

//         $('.parabg').addClass('bg-dark2');

//     } else {


//         $('.parabg').removeClass('bg-dark2');

//     };
// });

// $.scrollify({
//     section: ".section",
//     sectionName: "section-name",
//     interstitialSection: '.off-height',
//     easing: "easeOutExpo",
//     scrollSpeed: 1100,
//     offset: 0,
//     scrollbars: true,
//     standardScrollElements: ".off-scroll",
//     setHeights: true,
//     overflowScroll: false,
//     updateHash: true,
//     touchScroll: true
// });

// $(".somos").on('click', function(event) {
//     $.scrollify.move("#somos");

// });

// $(document).ready(function() {
//     var myElement = $('#logo').find('img');
//     $(window).on('scroll', function() {
//         var st = $(this).scrollTop();
//         myElement.css({
//             'opacity': 1 - st / 200
//         });
//     });
// });

// $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
//     if (!$(this).next().hasClass('show')) {
//         $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
//     }
//     var $subMenu = $(this).next('.dropdown-menu');
//     $subMenu.toggleClass('show');


//     $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
//         $('.dropdown-submenu .show').removeClass('show');
//     });


//     return false;
// })