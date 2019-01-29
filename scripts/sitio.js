// JS
// import jquery from "jquery";
// export default (window.$ = window.jQuery = jquery);
import bootstrap from 'bootstrap';

// CSS & SCSS
import '../styles/sitio.scss';

// SCRIPTS
console.log('hello world');
$('a').tooltip({ placement: 'left' })
$(function () {
  $('[data-toggle="popover"]').popover()
})