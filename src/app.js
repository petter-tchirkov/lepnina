/* src/app.js */

// Styles
import 'styles/_app.scss';
import bootstrap from 'bootstrap'


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
  loop: true,
  fadeEffect: { crossFade: true },
  autoplay: {
     delay: 2500,
     disableOnInteraction: true,
  },
  effect: "fade",

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
});



function getVals(){
  // Get slider values
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
  
  var displayElement = parent.getElementsByClassName("range-min")[0];
      displayElement.innerHTML = slide1;
  var displayElement = parent.getElementsByClassName("range-max")[0];
      displayElement.innerHTML = slide2;
}

window.onload = function(){
  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("page-range");
      for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
          if( sliders[y].type ==="range" ){
            sliders[y].oninput = getVals;
            // Manually trigger event first time to display values
            sliders[y].oninput();
          }
        }
      }
}


$(function () {

  var activeIndex = $('.active-tab').index(),
      $contentlis = $('.inspire__tabs-content li'),
      $tabslis = $('.inspire__tabs li');
  
  // Show content of active tab on loads
  $contentlis.eq(activeIndex).show();

  $('.inspire__tabs').on('click', 'li', function (e) {
    var $current = $(e.currentTarget),
        index = $current.index();
    
    $tabslis.removeClass('active-tab');
    $current.addClass('active-tab');
    $contentlis.hide().eq(index).fadeIn();
	 });
});

$('.video .video__video').click(function(){
  $('.video .video__video:after').css('display', 'none');
  console.log('huy');
})


