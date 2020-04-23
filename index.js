$(function() {
  $(window).on('load resize', function() {
    if ($(window).width() > 1000) {
      $('.lesson p').css('display', 'none');
      $('.lesson').hover(
        function() {
          $(this).find('p').fadeIn();
        },
        function() {
          $(this).find('p').fadeOut();
        }
      );
    } else {
      $('.lesson').off('mouseenter mouseleave');
      $('.lesson p').css('display', 'inline-block');
    };
  });

  $('.login-btn').click(
    function() {
      $('.modal h1').text("Emailでログイン");
      $('.modal .login').text("ログイン");
      $('.modal').fadeIn();
    }
  );
  $('.close-btn').click(
    function() {
      $('.modal').fadeOut();
    }
  );
  $(document).click(
    function(e) {
      if (!$(e.target).closest('.container, .form').length) {
        $('.modal').fadeOut();
      };
    }
  );
  $('.new-btn').click(
    function() {
      $('.modal h1').text("Emailで新規登録");
      $('.modal .login').text("新規登録");
      $('.modal').fadeIn();
    }
  );

  $('li').click(
    function() {
      if ($(this).find('p').hasClass('open')) {
        $(this).find('p').removeClass('open');
        $(this).find('p').slideUp();
        $(this).find('span').text("+");
      } else {
        $(this).find('p').addClass('open');
        $(this).find('p').slideDown();
        $(this).find('span').text("-");
      };
    }
  );

  $('.lesson-btn').click(
    function() {
      $('html, body').animate({
        'scrollTop': 650
      }, 500);
    }
  );

  $(window).on('load resize', function() {
    if ($(window).width() <= 670) {
      $('.lesson-btn, .new-btn, .login-btn').css('display', 'none');
      $('.menu').css('display', 'inline-block');
      $('.menu').click(function() {
        $('header img, .menu').fadeOut(500);
        $('.lesson-btn, .new-btn, .login-btn, .back').delay(1000).fadeIn(500);
      });
      $('.back').click(function() {
        $('.lesson-btn, .new-btn, .login-btn, .back').fadeOut(500);
        $('header img, .menu').delay(1000).fadeIn(500);
      });
    } else {
      $('header img, .lesson-btn, .new-btn, .login-btn').css('display', 'inline-block');
      $('.back, .menu').css('display', 'none');
    };
  });
});