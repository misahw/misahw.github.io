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

});