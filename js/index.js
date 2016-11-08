/////////////////////////////
////Scrolling after click////
/////////////////////////////
$("#li-1").click(function() {
	$('html, body').animate({
		scrollTop: $("#div1").offset().top
	}, 2000);
});
$("#li-2").click(function() {
	$('html, body').animate({
		scrollTop: $("#div2").offset().top
	}, 2000);
});
$("#li-3").click(function() {
	$('html, body').animate({
		scrollTop: $("#div3").offset().top
	}, 2000);
});
/////////////////////////////////////
$("#ci-1").click(function() {
	$('html, body').animate({
		scrollTop: $("#div1").offset().top
	}, 2000);
});
$("#ci-2").click(function() {
	$('html, body').animate({
		scrollTop: $("#div2").offset().top
	}, 2000);
});
$("#ci-3").click(function() {
	$('html, body').animate({
		scrollTop: $("#div3").offset().top
	}, 2000);
});
/////////////////////////////////////
////Highlighting current position////
/////////////////////////////////////
var waypoint1 = new Waypoint({
	element: document.getElementById('div1'),
	handler: function(direction) {
		if (direction == 'up') {
			$("#li-1").addClass("current");
			$("#ci-1").addClass('active');
			$("#li-2").removeClass("current");
			$("#ci-2").removeClass("active");
			$("#li-3").removeClass("current");
			$("#ci-3").removeClass("active");
		}
	},
	offset: '-30%'
});
var waypoint2down = new Waypoint({
	element: document.getElementById('div2'),
	handler: function(direction) {
		if (direction == 'down') {
			$("#li-1").removeClass("current");
			$("#ci-1").removeClass("active");
			$("#li-2").addClass("current");
			$("#ci-2").addClass('active');
			$("#li-3").removeClass("current");
			$("#ci-3").removeClass("active");
		}
	},
	offset: '40%'
});
var waypoint2up = new Waypoint({
	element: document.getElementById('div2'),
	handler: function(direction) {
		if (direction == 'up') {
			$("#li-1").removeClass("current");
			$("#ci-1").removeClass("active");
			$("#li-2").addClass("current");
			$("#ci-2").addClass('active');
			$("#li-3").removeClass("current");
			$("#ci-3").removeClass("active");
		}
	},
	offset: '-40%'
});
var waypoint3 = new Waypoint({
	element: document.getElementById('div3'),
	handler: function(direction) {
		if (direction == 'down') {
			$("#li-1").removeClass("current");
			$("#ci-1").removeClass("active");
			$("#li-2").removeClass("current");
			$("#ci-2").removeClass("active");
			$("#li-3").addClass("current");
			$("#ci-3").addClass('active');
		}
	},
	offset: '40%'
});
//////////////////////////////////
/////Animation of imgs///////////
//////////////////////////////////
$(document).ready(function() {
	$("#img1").mouseover(function() {
		$("#img1").animate({
			height: '+=10px',
			width: '+=10px'
		});
		$('#img1-cap').css({
			opacity: 0.0
		}).animate({
			opacity: 1.0,
		});
	});
	$("#img1").mouseout(function() {
		$("#img1").animate({
			height: '-=10px',
			width: '-=10px'
		});
		$('#img1-cap').css({
			opacity: 1.0
		}).animate({
			opacity: 0
		});
	});
	$("#img2").mouseover(function() {
		$("#img2").animate({
			height: '+=10px',
			width: '+=10px'
		});
		$('#img2-cap').css({
			opacity: 0.0
		}).animate({
			opacity: 1.0
		});
	});
	$("#img2").mouseout(function() {
		$("#img2").animate({
			height: '-=10px',
			width: '-=10px'
		});
		$('#img2-cap').css({
			opacity: 1.0
		}).animate({
			opacity: 0
		});
	});
});