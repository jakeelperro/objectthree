'use strict';
// Abandon all hope ye who enter here
$(document).ready(function() {
  
  var navigating = false,
      curPage = 1,
      pages = $(".section").length,
      $sections = $(".sections"),
      $paginationPage = $(".pagination .page"),
      $paginationTotal = $(".total-pages"),
      $textStuff = $(".section-heading, .additional-text");
  
  if (pages >= 10) {
    $paginationTotal.text(pages);
  } else {
    $paginationTotal.text("0" + pages);
  }
  
  /*
  Sets random transition-delay for blocks between 0.4 and 1.2 seconds on every call
  */
  function randomDelay() {
    for (var i = 1; i <= pages; i++) {
      $(".image").css("transition-delay", 2 + "s");
    }
  }
  
  /* Async hell, with hardcoded numbers.
  On production, 410 number must be .section-heading transform transition time in miliseconds + 10, but i'm sort of tired of this demo :D
  */
  function timeoutNav(t) {
    var time = t || 2000;
    $textStuff.addClass("not-visible");
    setTimeout(function() {
      navigating = false;
      randomDelay();
    }, time);
	  
    setTimeout(function() {
      $textStuff.show();
      $textStuff.css("opacity");
    }, time + 10);
  }
  
  function magicStuff(paramPage) {
    if (paramPage) curPage = paramPage;
    navigating = true;

    var calculatedMargin = 0 - (curPage - 1) * 100;
    $(this).removeClass("active");
	  
  }
  
  function pagination(pg) {
    $(".section").removeClass("active");
	$(".section-" + pg).addClass("active");
    curPage = pg;
    
    if (pages >= 10) {
      $paginationPage.text(pg);
    } else {
      $paginationPage.text("0" + pg);
    }
  }
  
  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage);
      magicStuff();
      timeoutNav();
    }
  }
  
  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      pagination(curPage);
      magicStuff();
      timeoutNav();
    }
  }
  
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!navigating) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });
  
});

var cambio=true;


 $("h3").mouseover(function() {
  $( "#follower" ).css( "transform","scale(1.8)" );
	 	 /*cambio=false;
var post= $("h3").position();
	   $( "#follower" ).css( {left:post.left, top:post.top} );*/
});

	
$( "h3" ).mouseout(function() {
  $( "#follower" ).css( "transform","scale(1)" );
		 cambio=true;
});

 $(window).mousedown(function() {
  $( "#follower" ).css( "transform","scale(0.7)" );
	 	 
});

 $(window).mouseup(function() {
  $( "#follower" ).css( "transform","scale(1)" );
	 	
});


var mouseX = 0, mouseY = 0;
$(window).mousemove(function(e){
   mouseX = Math.min(e.pageX);
   mouseY = Math.min(e.pageY);
});

// cache the selector
var follower = $("#follower");
var pointer = $("#pointer");
var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX-20 - xp) / 6;
    yp += (mouseY-20 - yp) / 6;
		if(cambio){
    follower.css({left:xp, top:yp});
				}

     pointer.css({left:mouseX-2, top:mouseY+2});
}, 30);
