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

 var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$(document).ready(function(){
  // $('.swiper-wrapper').slick({
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   dots:true,
  //   centerMode: true,
  //   responsive: [{
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       // centerMode: true,
  
  //     }
  
  //   }, {
  //     breakpoint: 800,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       dots: true,
  //       infinite: true,
  
  //     }
  //   },  {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: true,
  //       infinite: true,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //     }
  //   }]
  // });
})


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


