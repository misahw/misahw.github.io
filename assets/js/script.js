$(document).ready(function(){
	$("#signin").click(function(){
		$("#modal-container").show();
		$("#modal-overlay").show();
		$("#modal-box").show();
		$("#modal-box").animate({
			left: "50%"
		});
		setTimeout(function(){
			$('#notification').show();
			setTimeout(function(){
	  		$('#notification').fadeOut(300);
	  		}, 3200);
		},1300);
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