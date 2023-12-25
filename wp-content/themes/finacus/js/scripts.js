jQuery(document).ready(function(){
 $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $("#header").addClass('navfix');
        } else {
            $("#header").removeClass("navfix");
        }
    });
	
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
	
	/* MENU TABS */


$('.dropdown-nav ul li a.upper-a').hoverIntent(function(){
var id = $(this).attr('rel');
$('.inner-catagory').hide();
$('#'+id).show();
});



$('.enterprise-bts').hoverIntent(function(){
var id = $(this).attr('rel');
 $('.enterprise-menu .active').removeClass('active');
 $(this).addClass('active');
$('.enterprise-content .hover-content').hide();
$('#'+id).show();
});

$('.aadhar-bts').hoverIntent(function(){
var id = $(this).attr('rel');
 $('.aadhar-menu .active').removeClass('active');
 $(this).addClass('active');
$('.aadhar-content .hover-content').hide();
$('#'+id).show();
});

$('.deploy-menu h2').hoverIntent(function(){
var id = $(this).attr('rel');
 $('.deploy-menu .active').removeClass('active');
 $(this).addClass('active');
$('.deploy-content .hover-content').hide();
$('#'+id).show();
});

$('.services-menu h2').hoverIntent(function(){
var id = $(this).attr('rel');
 $('.services-menu .active').removeClass('active');
 $(this).addClass('active');
$('.services-content .hover-content').hide();
$('#'+id).show();
});


$('a.search-bt').click(function(){
$('.search-box').fadeIn('fast');
});

$('.search-box').mouseleave(function(){
$('.search-box').fadeOut('fast');
});


$('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
	
	$( document ).on( 'keydown', function ( e ) {
if ( e.keyCode === 27 ) {
$( '.our-ppl-popup,.popup-overlay' ).hide();
$('body').removeClass('active');
}
});

      $('.meet-our-people-wrap a').click(function(e){
      e.preventDefault();
      var content = $(this).attr('rel');
      $('.active').removeClass('active');
      $('body').toggleClass('active');
      $('.our-ppl-popup').hide();
      $('#'+content).show();
    });

  $('.our-ppl-popup .closed-bt').click(function() {
    $('.our-ppl-popup').hide();
    $('.active').removeClass('active');
  });
  
  
	
});