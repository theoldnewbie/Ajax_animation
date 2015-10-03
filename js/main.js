var headUrl = 'http://theoldnewbie.github.io/Ajax_animation/';
var htmlList = ['simple1.html','simple2.html','simple3.html'];

var ajaxResult = 0;
var $divLeft = $('<div>');
$divLeft.css({
	position: 'absolute',
	width: '600px',
	height: '600px',
	left: '-600px',
	marginLeft: '50px'
});
var $divRight = $('<div>');
$divRight.css({
	position: 'absolute',
	width: '600px',
	height: '600px',
	right: '-600px',
	marginRight: '50px'
});
$.ajax({
	url: headUrl + htmlList[0],
	success: function(data) {
		$divLeft.html(data);	
		$(document.body).append($divLeft);
		
		animateDivs();
	},
	error: function(data) {
	  console.error(data);
	}
});

$.ajax({
	url: headUrl + htmlList[1],
	success: function(data) {
		
		$divRight.html(data);	
		$(document.body).append($divRight);
		
		animateDivs();
	},
	error: function(data) {
	  console.error(data);
	}
});

function animateDivs() {
	ajaxResult++;
	if (ajaxResult === 2) {
		$divLeft.animate({left: 0}, 1500);
		$divRight.animate({right: 0}, 1500);
	};
}
