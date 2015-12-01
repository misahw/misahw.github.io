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
    if (margin == -2500){
      return false;
    } else {
      $('#carousel-prev').css('opacity', '1');
      margin -= 500;
      $('#carousel').css('margin-left', margin.toString() +"px");
      if (margin == -2500){
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


  $('.movie,.movie-info').mouseover(function(){
  	$('.movie-info').fadeIn(400);
  	$('.fa-chevron-down').fadeOut(400);
  });
  $('.movie-info').mouseleave(function(){
  	$(".movie-info").fadeOut(400);
  	$('.fa-chevron-down').fadeIn(400);
  });


// ratings script
  $('#e1').hover(function(){
  	$('#e1').css("color", "#ffcc00");
  }, function(){
  	$('#e1').css("color", "white");
  });
  $('#e2').hover(function(){
  	$('#e1,#e2').css("color", "#ffcc00");
  }, function(){
  	$('#e1,#e2').css("color", "white");
  });
  $('#e3').hover(function(){
  	$('#e1,#e2,#e3').css("color", "#ffcc00");
  }, function(){
  	$('#e1,#e2,#e3').css("color", "white");
  });
  $('#e4').hover(function(){
  	$('#e1,#e2,#e3,#e4').css("color", "#ffcc00");
  }, function(){
  	$('#e1,#e2,#e3,#e4').css("color", "white");
  });
  $('#e5').hover(function(){
  	$('#e1,#e2,#e3,#e4,#e5').css("color", "#ffcc00");
  }, function(){
  	$('#e1,#e2,#e3,#e4,#e5').css("color", "white");
  });

  $('.fa-star-o, .fa-star').click(function(){
  	var x = 5;
  	while (x>0){
  		$('.fa-star:nth-child(' + x + ')').hide();
  		x-=1;
  	}
  	var id = parseInt($(this).attr('id').replace('e', '').replace('f', ''));
  	while(id > 0){
  		$('.fa-star:nth-child(' + id + ')').show();
  		id-=1;
  	};
  	$('#n1').show();
  	setTimeout(function(){
  		$('#n1').fadeOut(300);
  		}, 4000);
  })

  $('.fa-plus-circle').hover(function(){
    $('.fa-plus-circle').css("color", "#33cc33");
  }, function(){
    $('.fa-plus-circle').css("color", "white");
  });
  $('#save-later').click(function(){
    if ($(this).hasClass('fa-plus-circle')){
      $('#save-later').removeClass('fa-plus-circle');
      $('#save-later').addClass('fa-plus');
      $('#save-later').css("color", "#33cc33");
      $('#n2').show();
      setTimeout(function(){
        $('#n2').fadeOut(300);
        }, 2300);
    } else {
      $('#save-later').addClass('fa-plus-circle');
      $('#save-later').removeClass('fa-plus');
      $('#save-later').css("color", "white");
    }
  });

});