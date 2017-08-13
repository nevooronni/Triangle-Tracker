//custom js 

$(document).ready(function() {

//back-end
var triangle = function(side1, side2, side3) {
	if((side1 === 0) | (side2 === 0) | (side3 === 0)) {
		alert("Number entered should start from 1 and above!");
	} else if(side1 === side2 === side3) {
		$(".replace").slideToggle();
	} else if((side1 === side2) | (side1 === side3) | (side2 === side3)) {
		$("#replace2").slideToggle();
	} else if((side1 !== side2) | (side2 !== side3)) {
		$("#replace3").slideToggle();
	} else {
		alert("please enter a number in all the spaces!");
	}
}	

//front-end
	$("button.formbtn").click(function(event) {
		event.preventDefault();
		var side1 = parseInt($("#side1").val());
		var side2 = parseInt($("#side2").val());
		var side3 = parseInt($("#side3").val());
		var show = triangle(side1, side2, side3);
		$().slideToggle(show);
	});
});