/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/modules/issafari.js
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
  document.documentElement.classList.add('safari');
}
;// CONCATENATED MODULE: ./src/js/modules/iswebp.js
// check support webp
function isWebp(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
}
// add class webp/no-webp to html
isWebp(function (support) {
  var className = support === true ? 'webp' : 'no-webp';
  document.documentElement.classList.add(className);
});
;// CONCATENATED MODULE: ./src/js/modules/mobilemenu.js
document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var burger = document.querySelector('.burger');
  var burgerIcon = burger.querySelector('.burger__icon');
  var menu = document.querySelector('.menu');
  var close = document.querySelectorAll('.menu__close');

  // add burger icon
  if (burger && !burgerIcon) {
    burger.innerHTML = "\n\t\t\t  <span class=\"burger__icon\">\n\t\t\t\t\t<span class=\"burger__line burger__line_1\"></span>\n\t\t\t\t\t<span class=\"burger__line burger__line_2\"></span>\n\t\t\t\t\t<span class=\"burger__line burger__line_3\"></span>\n\t\t\t  </span>";
  }
  var addClass = function addClass(element, className) {
    return element.classList.add(className);
  };
  var removeClass = function removeClass(element, className) {
    return element.classList.remove(className);
  };

  // open menu
  var openMenu = function openMenu() {
    addClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
    addClass(menu, 'menu_open');
    addClass(html, 'scroll-disable');
  };
  burger.addEventListener('click', openMenu);

  // close menu
  var closeMenu = function closeMenu() {
    removeClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
    removeClass(menu, 'menu_open');
    removeClass(html, 'scroll-disable');
  };
  close.forEach(function (link) {
    return link.addEventListener('click', closeMenu);
  });
});
;// CONCATENATED MODULE: ./src/js/script.js



/******/ })()
;