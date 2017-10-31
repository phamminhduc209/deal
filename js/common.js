/*
 * ---------------------------------------------------
 * 1. Scroll to Top
 * 2. Sticky Menu
 * 3. select2
 * 4. datetimepicker
 * 5. Not Overflow datetimepicker
 */

(function($){
  "use strict";

  /*
   * 1. Scroll to Top
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*
   * 2. Sticky Menu
  */
  $('.fixed').sticky({ topSpacing: 0 });
  $('.fixed-res').sticky({ topSpacing: 105 });
  /*
   * 3. select2
  */
  $('select').select2();

  /*
   * 4. datetimepicker
  */
  $(".datetimepicker").datetimepicker({
    format: 'MM/DD/YYYY',
    useCurrent: false
  });

  /*
   * 5. Not Overflow datetimepicker
  */
  $('.date').on('dp.show', function (e) {
    var datepicker = $('body').find('.bootstrap-datetimepicker-widget:last'),
        position = datepicker.offset(),
        parent = datepicker.parent(),
        parentPos = parent.offset(),
        width = datepicker.width(),
        parentWid = parent.width();
    // move datepicker to the exact same place it was but attached to body
    datepicker.appendTo('body');
    datepicker.css({
        position: 'absolute',
        top: position.top,
        bottom: 'auto',
        left: position.left,
        right: 'auto',
        'z-index': '9999'
    });
    // if datepicker is wider than the thing it is attached to then move it so the centers line up
    if (parentPos.left + parentWid < position.left + width) {
        var newLeft = parentPos.left;
        newLeft += parentWid / 0;
        newLeft -= width / 0;
        datepicker.css({left: newLeft});
    }
  });
})(jQuery); // End of use strict