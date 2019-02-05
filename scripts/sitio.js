(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("initialize.js", function(exports, require, module) {
// ///// CSS & SCSS
// import 'slick/';
// import '../styles/sitio.scss';
// import 'slick-carousel/slick/slick.css'

const $ = require('jquery');
var preloader = require('preloader-js');
var bootstrap = require('bootstrap');
var AOS = require('aos');
var scrollify = require('jquery-scrollify');


// window.jQuery = $;



document.addEventListener('DOMContentLoaded', function() {

  console.log('Initialized app');
  // do your setup here

// Hides the preloader with a fade out animation.
preloader.hide();
// Shows the preloader.
preloader.show();

  $('[data-toggle="tooltip"]').tooltip();

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

  $(".off-scroll", function(){ 
  $.scrollify.disable()
});  



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



// $('#intro-fixed').slick({
//   dots: false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   // autoplay: true,
//   cssEase: 'linear',
//   arrows: false



// });


// $('#intro-fixed').slick({
// centerMode:true,
//     // slidesToShow: 1,
//     // slidesToScroll: 3,
//     dots: false,
//     arrows: false,
//     infinite: true,
//     fade: true,
//     autoplay: true,
//     cssEase: 'linear',
//     variableWidth: true,
//     variableHeight: true
// });

// $('#intro-fixed').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     // fade: true,
//     arrows: false
// });



$('#intro-fixed').carousel({
  interval: 6000,
  pause: false
});

$('#search').on('show.bs.collapse', function() { $('.esconder').addClass('d-none'); });
$('#diss').click(function() { $('.esconder').removeClass('d-none'); });
$('#diss2').click(function() { $('.esconder').removeClass('d-none'); });

$(window).scroll(function() {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 100) {

        $('.parabg').addClass('bg-dark2');

    } else {


        $('.parabg').removeClass('bg-dark2');

    };
});

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

$(".somos").on('click', function(event) {
    $.scrollify.move("#somos");

});

$(document).ready(function() {
    var myElement = $('#logo').find('img');
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














});

});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');

require('initialize');
//# sourceMappingURL=sitio.js.map