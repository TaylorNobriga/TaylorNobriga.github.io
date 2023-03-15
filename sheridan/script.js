'use strict'

function toggleIcon() {
  $('.icon').on('click', function () {
    $('.icon').toggleClass('active')
    $('.menu-mobile').slideToggle(300)
  })
}

function closeMobileMenu() {
  $('.menu-mobile').on('click', 'a', function () {
    $('.icon').trigger('click')
  })
}

//when the page loads call toggleIcon;

// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!


// code for single slider carousel
$('.single-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 1500,
  infinite: true,
  dots: true,
  draggable: false
});




  // End of Your Code . Don't delete that line below!!

});

$(toggleIcon)
$(closeMobileMenu)
