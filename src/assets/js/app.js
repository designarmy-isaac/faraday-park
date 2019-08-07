import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
//require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$("body").hide()

$(document).foundation();
$(document).ready( fn );

function fn() {
  
  $("body").fadeIn(2000);
  
  var activeSlideIndex = 0,
      nextSlideIndex,
      previousSlideIndex;
  
  const $nextButton = $('#next-button'),
        $previousButton = $('#previous-button'),
        $slideshow1 = $('#slideshow-1'),
        $slideshow2 = $('#slideshow-2');
  
  showSlide(activeSlideIndex);
    
  $(window).resize(function() { 
    $slideshow1.css('height', 'auto'); // let slideshow's height adjust to new layout
    preserveHeight($slideshow1); // set slideshows height in css so images and text can swap without layout jumping
  }); 
  
  function preserveHeight($el) { // preserve element's height in css so content can change without layout jumping
    var h = $el.height();
    $el.height(h);
  }
  
  function showSlide(n) {
    var i,
        $slides = $('.slide'),
        m = $slides.length - 1;
    
    if (n > m) {
      previousSlideIndex = m;
      activeSlideIndex = 0;
      nextSlideIndex = 1;
    }
    else if (n < 0) {
      previousSlideIndex = m - 1;
      activeSlideIndex = m;
      nextSlideIndex = 0;
    }
    else {
      previousSlideIndex = n - 1;
      activeSlideIndex = n;
      nextSlideIndex = n + 1;
    }
    
//    for (i = 0; i < $slides.length; i++) {
////      $slides[i].style.display = "none";
//      $slides.eq(i).fadeOut(500);
////      $slides.hide;
//    }
    
    var previousSlide = $('#'+ 'slide-' + previousSlideIndex).detach();
    var activeSlide = $('#'+ 'slide-' + activeSlideIndex).detach();
    var nextSlide = $('#'+ 'slide-' + nextSlideIndex).detach();
    
    previousSlide.appendTo('#slideshow-2');
    activeSlide.appendTo('#slideshow-1');
    nextSlide.prependTo('#slideshow-2');
    
    $('.slide').hide();
    
//    var $slide1 = $('#slideshow-1 .slide')[0],
//        $slide2 = $('#slideshow-2 .slide')[0];
//    $slide1.style.display = "inline-block";
//    $slide2.style.display = "inline-block";
//    $slide1.style.opacity = "0";
//    $slide2.style.opacity = "0";
//    $slide1.style.opacity = "1";
//    $slide2.style.opacity = "1";
    $('#slideshow-1 .slide').eq(0).fadeIn(700);
    $('#slideshow-2 .slide').eq(0).fadeIn(700);
    
    preserveHeight($slideshow1);
    
//    $('.slide').hide();
//    activeSlide.addClass('shown');
//    nextSlide.addClass('shown');
    
  }
  
  $nextButton.click(function() {
    showSlide(activeSlideIndex + 1);
  });
  
  $previousButton.click(function() {
    showSlide(activeSlideIndex - 1);
  });
  
  
}
