$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

// Scroll to About
$('#navbrand').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $("#my-header").offset().top
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('#abt1').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 35
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('#abt2').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 35
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('#wk1').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 35
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

$('#ct1').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 35
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
/**$("#abt1").click(function() {
     $('html, body').animate({
         scrollTop: $("#about").offset().top
     }, 500);
});

$("#abt2").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

// Scroll to Navbar
$("#navbrand").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-header").offset().top
    }, 500);
});**/

// Scroll to Top
// Ref: https://codepen.io/rdallaire/pen/apoyx
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbarx");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });