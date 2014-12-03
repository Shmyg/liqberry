
// jQuery(document).ready(function($) {
//          $(".nav_button_sol").click(function () {
//         $('.clobal_burden').fadeOut(700);
//             $('.our_solution').fadeIn(700);

//             // $('.clobal_burden').addClass('hidden');
//              $(".nav_button_sol").addClass('hidden');
//             $(".nav_button_glob").removeClass('hidden');
//             $('#change_text ul').css('margin-top', '10px');
//          });

//           $(".nav_button_glob").click(function () {
//                 $('.clobal_burden').fadeIn(700);
//                 $('.our_solution').fadeOut(700);
//              // $('.clobal_burden').removeClass('hidden');
//             // $('.clobal_burden').addClass('visible');
//              // $('.our_solution').removeClass('visible');
//               $(".nav_button_glob").addClass('hidden');
//               $(".nav_button_sol").removeClass('hidden');
//               $('#change_text ul').css('margin-top', '50px');
//           });

    
// });
var FIREFOX = /Firefox/i.test(navigator.userAgent);
function SlideResize() {
  var wrapperHeight = $(".wrapper").height();
  var sliderHeight = $(".fon-slider").height();
   var wrapperHeight2 = wrapperHeight +  50 + "px";
   var sidebarHeight = $(".left-sidebar").height();
   var productSidebarHeight = $(".wrapper-product .left-sidebar").height();
   var height = 100 + "%";
   var autoHeight = "auto";

    if(FIREFOX)  
   {
    $(".fon-slider").height(wrapperHeight);
    $("h2.nav_button_glob").css({'margin-right':'100px'});

    // if ($("html").height()<900) {
    //   // $(".content-right-wrap.contact-wrap").height(autoHeight);
    //   // $(".content-right-wrap.contact-wrap").css({'min-height':'100%'});
    // }

   }
   if (($("html").height()>900) & ($("html").width()>1800)) {
    jQuery("meta[name='viewport']").attr('content','width=device-width, initial-scale=1');

   }

  if (($("html").height()<900) & ($("html").width()>1600)) {
   
   if(FIREFOX)  
   {
    $(".fon-slider").height( sidebarHeight);
   }
   else
   {
    $(".fon-slider").height( sidebarHeight); 
   }

  }

  if (($("html").height()<=900) && ($("html").width()<=1600)) {
    if(FIREFOX)  
   {
    $("ul.accordion").height(height);
   }
   }

 if ((($("html").height()<690) && ($("html").width()>1366)) || (($("html").height()<=550) && ($("html").width()<=1366) && ($("html").width()>=1024)))
  {
    if(FIREFOX) 
    {
    $("ul.accordion").height(autoHeight);
    $(".fon-slider").height(sidebarHeight);
    }
    else
    {
    $(".fon-slider").height(sidebarHeight); 
    }
  }

   if ( (($("html").height()<900) && ($("html").width()>1600)) || ((($("html").height()<=750) && ($("html").width()<=1600)) && ($("html").width()>1024))) { 
    
     $(".content-right-wrap").height(productSidebarHeight);

   }

};

 jQuery(document).ready(function($){
    SlideResize();
  $(window).resize(function() {
  SlideResize();
});
});


$(function() {

    // accordion 
    var accordion = $('#accordion'),
        accordionItems = accordion.find('li.product');
        onAccordionResize = function () {
            accordionItems.stop().animate({'width':'33%'}, 500);
        };

    $(window).resize(function() {
        onAccordionResize();
    });

	      accordionItems.mouseenter(
          function () {
            var $this = $(this);
           // var $this = $(this);
            if(FIREFOX)  {
              accordionItems.not($this).stop().animate({'width': '9.6%'}, 500);
            }
            else{
               accordionItems.not($this).stop().animate({'width': '9.8%'}, 500);
            }
            $this.stop().animate({'width': '79%'}, 500); 
        });

        accordionItems.mouseleave(

          function () {
          onAccordionResize();
          }
        );   
     




     // custom scroll
    $('.scroll-pane').jScrollPane({
      autoReinitialise: true
    });


    // feedback dialog
    $('.js_feedback_dialog').dialog({
        autoOpen: false,
        open: function() {
            $(this).closest('.ui-dialog').find('.ui-dialog-titlebar').empty()
        },
        width: 907,
        resizable: false,
        draggable: false,
        modal: true
    });

    // validate feedback form
    $('.js_feedback_form').validate();


    // exclude placeholders values from validation
    $.each($.validator.methods, function (key, value) {
        $.validator.methods[key] = function () {
            var el = $(arguments[1]);
            if (el.is('[placeholder]') && arguments[0] == el.attr('placeholder'))
                arguments[0] = '';

            return value.apply(this, arguments);
        };
    });


    $('html')
          .on('click', function(e) {
              $('.js_feedback_dialog').dialog('close');
          })
          .on('click', '.js_feedback_dialog', function(e) {
              e.stopPropagation();
          })
          .on('click', '.js_open_feedback_dialog', function(e) {
              e.preventDefault();
              e.stopPropagation();
              $('.js_feedback_dialog').dialog('open');
          })


});
    
