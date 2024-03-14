(function ($) {

  "use strict";

  $(window).on('load', function () {

    /*Page Loader active
      ========================================================*/
    // $('#preloader').fadeOut();
    setTimeout(function () {
      $('#preloader').fadeOut();
    }, 500); // 0.5 seconds timeout


    
    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });




    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    function close_toggle() {
      if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide');
        });
      }
      else {
        $('.navbar .navbar-inverse a').off('click');
      }
    }
    close_toggle();
    $(window).resize(close_toggle);

    /* WOW Scroll Spy
  ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false
    });
    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
      delay: 10,
      time: 1500
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.register-link').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));

// // Set the date to count down to (format: month day, year, hour:minute:second)
// var countDownDate = new Date('Mar 4, 2024 00:08:00').getTime()

// // Update the timer every second
// var x = setInterval(function () {
//   // Get the current date and time
//   var now = new Date().getTime()

//   // Calculate the time remaining
//   var distance = countDownDate - now

//   // Calculate days, hours, minutes, and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24))
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000)

//   // Display the timer in the #timer div
//   document.getElementById('timer').innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'mins ' + seconds + 'sec '

//   // If the countdown is over, display a message
//   if (distance < 0) {
//     clearInterval(x)
//     document.getElementById('timer').innerHTML = "Get ready to unleash your coding skills in PyExpo'24!"
//   }
// }, 1000)

// function scroll() {
//   var phase = document.getElementsByClassName('tab-content');
//   phase.scrollIntoView();

// }

// Set the date to count down to (format: month day, year, hour:minute:second)
var countDownDate = new Date('Mar 14, 2024 16:00:00').getTime();

// Update the timer every second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
 
  var hours = Math.floor((distance % (1000 * 60* 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the timer in the #timer div
  var timerElement = document.getElementById('timer');
  if (distance >= 0) {
    timerElement.innerHTML =  hours + 'hours ' + minutes + 'mins ' + seconds + 'sec ';
  } else {
    clearInterval(x);
    timerElement.innerHTML = "-------------------------";      //Unleash your coding skills in the next 30hrs of Hack2Expo !
    timerElement.style.fontSize = '30px'; // Adjust font size for the message
  }

}, 1000);

// Accordion schedule area
// const accordionItem = document.querySelectorAll('.accordion-item');

// const onClickAccordionHeader = e => {
//   if (e.currentTarget.parentNode.classList.contains('active')) {
//     e.currentTarget.parentNode.classList.remove("active");
//   } else {
//     Array.prototype.forEach.call(accordionItem, e => e.classList.remove('active'));
//     e.currentTarget.parentNode.classList.add("active");
//   }
// };

// const init = () => {
//   Array.prototype.forEach.call(accordionItem, e => e.querySelector('.accordion-header').addEventListener('click', onClickAccordionHeader, false));
// };

const accordionItems = document.querySelectorAll('.accordion-item');

const onClickAccordionHeader = (e) => {
  const parentAccordionItem = e.currentTarget.parentNode;

  if (parentAccordionItem.classList.contains('active')) {
    parentAccordionItem.classList.remove('active');
  } else {
    // Remove 'active' class from all accordion items
    accordionItems.forEach(item => item.classList.remove('active'));
    // Add 'active' class to the clicked accordion item
    parentAccordionItem.classList.add('active');
  }
};

const init = () => {
  // Attach event listener to each accordion header
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', onClickAccordionHeader);
  });
};

// Initialize the accordion functionality
init();


document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function () {
    const icon = navbarToggler.querySelector('.lni-menu');
    icon.classList.toggle('open');
  });

  // Update the menu symbol when a menu item is clicked
  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      const icon = navbarToggler.querySelector('.lni-menu');
      icon.classList.remove('open');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const script = document.createElement('script');
  script.src = 'https://apply.devfolio.co/v2/sdk.js';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  // Optional: If you want to remove the script when the page unloads
  window.addEventListener('unload', function () {
    document.body.removeChild(script);
  });
});


// Handle scrolling when the user interacts with the scrollbar
// const cardsContainer = document.querySelector('.card');

// cardsContainer.addEventListener('scroll', function() {
//   if (!this.classList.contains('hovered')) {
//     const scrollPercentage = this.scrollLeft / (this.scrollWidth - this.clientWidth);
//     const animationDuration = parseFloat(getComputedStyle(this).getPropertyValue('--animation-duration'));
//     this.style.setProperty('--animation-progress', scrollPercentage * animationDuration + 's');
//   }
// });

// cardsContainer.addEventListener('mouseenter', function() {
//   this.classList.add('hovered');
// });

// cardsContainer.addEventListener('mouseleave', function() {
//   this.classList.remove('hovered');
// });



(function($) {
  "use strict";  

  $(window).on('load', function() {
    var video = document.getElementById('bgvid');

    // Function to play video when section is in view
    function playVideo() {
      var videoContainer = $('.ready-to-play');
      var videoPosition = videoContainer.offset().top;
      var windowPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (videoPosition < windowPosition + windowHeight && videoPosition + videoContainer.height() > windowPosition) {
        if (video.paused) {
          video.play();
        }
      } else {
        video.pause();
      }
    }

    // Play video when scrolled into view
    $(window).on('scroll', function() {
      playVideo();
    });

    // Play video when loaded and in view
    playVideo();

    // Handle video pause event
    video.addEventListener('pause', function() {
      setTimeout(function() {
        video.play();
      }, 100); // Adjust delay as needed
    });

    // Prevent video from being paused by user interaction
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      }
    });

    // Prevent context menu on video
    video.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
  });
})(jQuery);

