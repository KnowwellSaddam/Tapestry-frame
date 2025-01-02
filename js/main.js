$(document).ready(function() {
    $('.site-header').after('<div class="nav-space"/>')
    $(window).scroll(function() {

        if ($(window).scrollTop() > 1) {
            $('.nav-space').css('height', $('.navbar').height());
            $('.site-header').addClass('fixed-header');

        } else {

            $('.site-header').removeClass('fixed-header');
            $('.nav-space').css('height', '0');
        }

    });

    $(".navbar-toggle").click(function() {
        $(this).toggleClass('open');
    });



    //parallax scroll
    $(window).on("load scroll", function() {
        var parallaxElement = $(".custom_scroll"),
        parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function() {
        for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top + 20,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
            currentElement.css({
            transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
            });
        }
        });
    });

    $('.custom_tab li').click(function(){
        $('.custom_tab li').removeClass('active');
        $(this).addClass('active');
        var get_id = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + get_id).fadeIn();
    
    });
    
      // Show the first tab and hide the rest
      $('.wc-tabs li:first-child').addClass('active');
      $('.woocommerce-Tabs-panel').hide();
      $('.woocommerce-Tabs-panel:first').show();

      // Click function
      $('.wc-tabs li').click(function(){
        $('.wc-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.woocommerce-Tabs-panel').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      });


    //   slece product color
    $('.choose_color a').click(function(){
        $('.choose_color a').removeClass('active');
        $(this).addClass('active');
    });


// accordion js
      $('.accordion li h5').click(function() {
        if (!$(this).next().is(':visible')) {
            $('.drop').slideUp(400);
            $('.accordion li').removeClass('active');
            $(this).next().slideDown(400);
            $(this).parent().addClass('active');
        }
        else {
             $('.drop').slideUp(400);
             $('.accordion li').removeClass('active');
        }
        return false;
    });

    jQuery('.navbar ul > li').has('ul').append('<span class="close-menu"></span>');

    jQuery('.close-menu').click(function(){
    jQuery(this).prev().slideToggle();
    jQuery(this).parents('li').siblings('li').children('ul').slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).parents('li').siblings('li').children('.close-menu').removeClass('active');
});


$('.back-top a').hide();
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('.back-top a').fadeIn();
       } else {
           $('.back-top a').fadeOut();
       }
   });
   $('.back-top a').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
   });


  $('.toggle-menu').click(function(){
    $('.overlay-top').addClass('open-nav');
  });

  $('.close-icon').click(function() {
    $('.overlay-top').removeClass('open-nav');
  });




AOS.init();

   AOS.init({
    disable: 'mobile',
    once: true
  });


});

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }




