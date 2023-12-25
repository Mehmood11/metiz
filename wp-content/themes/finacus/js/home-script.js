$(document).ready(function() {
if ($(window).width() > 768) {
$(".dropdown").hover(
function() {
$('.dropdown-menu', this).fadeIn("fast");
$(this).addClass('open');
},
function() {
$('.dropdown-menu', this).fadeOut("fast");
$(this).removeClass('open');
});
};

$('#main-slider').flexslider({
animation: "slide",
controlNav: false,
});
$('#blog-slider').flexslider({
animation: "slide",
controlNav: false,
controlsContainer: $(".custom-controls-container3"),
customDirectionNav: $(".custom-navigation3 a")
});
$('#client-slider').flexslider({
animation: "slide",
controlNav: false,
controlsContainer: $(".custom-controls-container2"),
customDirectionNav: $(".custom-navigation2 a")
});
$('#testimonial-slider').flexslider({
animation: "slide",
controlNav: false,
controlsContainer: $(".custom-controls-container"),
customDirectionNav: $(".custom-navigation a")
});
$('#video-banner-slider').flexslider({
animation: "fade",
controlNav: false,
directionNav: false,
});
$('.equal-height').matchHeight({
byRow: true,
property: 'height',
target: null,
remove: false
});
$("#news .tab-pane").mCustomScrollbar({
setHeight: 350,
theme: "inset-2-dark"
});

autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }

});