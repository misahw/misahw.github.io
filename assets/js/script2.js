$(document).ready(function(){
	$(".nav-button").click(function(){
		if ($(".nav-button").hasClass("nav-button-active")){
			$(".nav").hide();
			$(".content").addClass("nav-closed");
			$(".nav-button").removeClass("nav-button-active");
		} else{
			$(".nav-button").addClass("nav-button-active");
			$(".nav").show();
			$(".content").removeClass("nav-closed");
		}
	});

});