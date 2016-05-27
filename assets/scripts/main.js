/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /* lazyload.js (c) Lorenzo Giuliani
   * MIT License (http://www.opensource.org/licenses/mit-license.html)
   *
   * expects a list of:
   * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
   */

  !function(window){
    var $q = function(q, res){
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q,'f:b');
            for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
              l[b].currentStyle.f && c.push(l[b]);

            a.removeRule(0);
            res = c;
          }
          return res;
        }
      , addEventListener = function(evt, fn){
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
        }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
      ;

  }(this);​

  $('article').mouseenter(function(){
    var staticImage = $(this).find('img').attr('data-static')
    var dynamicImage = $(this).find('img').attr('data-dynamic');

    $(this).find('img').attr('src', dynamicImage);

  }).mouseleave(function(){

    var staticImage = $(this).find('img').attr('data-static')
    var dynamicImage = $(this).find('img').attr('data-dynamic');

    $(this).find('img').attr('src', staticImage);
  });

  function dialogue(){
    $('.actions li').click(function(){
        var tab = $(this).attr('class');
        $('.hold > *').removeClass('active').fadeOut(200);
        $('.hold .'+tab+' > *:not(:first-child)').hide();
        $('.hold .'+tab).delay(200).fadeIn().addClass('active');
        $('.hold .'+tab+'>:first-child').delay(200).addClass('active');
    });
  }

  function advanceText(){
    $('.hold').click(function(){
      var idx = $('.hold .active > .active').index();
      console.log(idx);
      $('.hold .active > .active').removeClass('active').hide();
      $('.hold .active >:nth-child('+idx+')').delay(100).addClass('active').fadeIn();
    })
  }

  function toggleModal(){
    $('.work article .button').click(function(){
      $(this).parent().find('.modal').fadeIn(200);
    })
    $('.work article .modal').click(function(){
      $(this).fadeOut();
    })
  }

  function formExpand(){
    $('.expand').click(function(){
      $('.email-two').slideDown(200);
      $(this).fadeOut(200);
    })
  }

  // call functions
  advanceText();
  dialogue();
  formExpand();
  toggleModal();

})(jQuery); // Fully reference jQuery after this point.
