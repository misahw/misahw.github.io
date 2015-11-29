$(document).ready(function(){
	$(".nav-button").click(function(){
		if ($(".nav-button").hasClass("nav-button-active")){
			$(".wrapper").addClass("nav-closed");
			$(".nav-button").removeClass("nav-button-active");
			$(".nav").removeClass("nav-active");
		} else{
			$(".nav-button").addClass("nav-button-active");
			$(".nav").addClass("nav-active");
			$(".wrapper").removeClass("nav-closed");
		}
	});
	$(".container").waypoint(function(direction){
		if (direction=="down"){
			$("#header").css("opacity", "0");
		} else{
			$("#header").css("opacity", "1");
		}
	});


	// carousel script
	$('#carousel-next').click(function(){
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == -2000){
      return false;
    } else {
      $('#carousel-prev').css('opacity', '1');
      margin -= 500;
      $('#carousel').css('margin-left', margin.toString() +"px");
      if (margin == -2000){
        $('#carousel-next').css('opacity', '.3');
      }
    }
  });
  $('#carousel-prev').click(function(){
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == 0){
      return false;
    } else {
      $('#carousel-next').css('opacity', '1');
      margin += 500;
      $('#carousel').css('margin-left', margin.toString() +"px");
      if (margin == 0){
        $('#carousel-prev').css('opacity', '.3');
      };
    }
  });

  $('.hover-container').hover(function(){
  	$('.movie-info').fadeIn(400);
  }, function(){
  	$('.movie-info').fadeOut(400);
  });
  $('.stars').mouseover(function(){
  	alert("!");
  	$('.full i').fadeIn(400);
  
  });

});