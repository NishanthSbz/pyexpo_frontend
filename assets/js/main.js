(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
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
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.register-link').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });      

}(jQuery));

 // Set the date to count down to (format: month day, year, hour:minute:second)
 var countDownDate = new Date('Mar 1, 2024 00:00:00').getTime()
            
 // Update the timer every second
 var x = setInterval(function () {
   // Get the current date and time
   var now = new Date().getTime()
 
   // Calculate the time remaining
   var distance = countDownDate - now
 
   // Calculate days, hours, minutes, and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24))
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
   var seconds = Math.floor((distance % (1000 * 60)) / 1000)
 
   // Display the timer in the #timer div
   document.getElementById('timer').innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'mins ' + seconds + 'sec '
 
   // If the countdown is over, display a message
   if (distance < 0) {
     clearInterval(x)
     document.getElementById('timer').innerHTML = 'EXPIRED'
   }
 }, 1000)

 function scroll() {
  var phase = document.getElementsByClassName('tab-content');
  phase.scrollIntoView();
  
}

 