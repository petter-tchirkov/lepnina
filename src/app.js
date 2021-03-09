/* src/app.js */

// Styles
import 'styles/_app.scss';

$(function() {
  console.log('Ready!');

  require('scripts/demo');
})


// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
 // core version + navigation, pagination modules:
 import SwiperCore, { Navigation, Pagination } from 'swiper/core';

 // configure Swiper to use modules
 SwiperCore.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
