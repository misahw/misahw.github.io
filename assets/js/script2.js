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

});