$(document).ready(function(){
	$("#signin").click(function(){
		$("#modal-container").show();
		$("#modal-overlay").show();
		$("#modal-box").show();
		$("#modal-box").animate({
			left: "50%"
		});
	});
	$("#cancel").click(function(){
		$("#modal-box").hide();
		$("#modal-overlay").hide();
		$("#modal-container").hide();
		$("#modal-box").css("left", "-500px");
	});
	$("#modal-overlay").click(function(){
		$("#modal-box").hide();
		$("#modal-overlay").hide();
		$("#modal-container").hide();
		$("#modal-box").css("left", "-500px");
	});
});