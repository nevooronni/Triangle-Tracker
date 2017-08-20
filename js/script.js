//custom js 

$(document).ready(function() {

//back-end
var triangle = function(side1, side2, side3) {
	if(((side1 + side2) >= side3) && ((side2 + side3) >= side1) && ((side3 + side1) && side2)) { 
		return typeOfTriangle(side1, side2, side3);//noticed that this return is very key in my code
  } else {
		$("#replace4").slideToggle();//no triangle
	}
};

var typeOfTriangle = function(side1, side2, side3) {
	if((side1 === side2) && (side2 === side3)) {
		return $(".replace").slideToggle();//equilateral triangle
	} else if((side1 === side2) || (side1 === side3) || (side2 === side3)) {
		return $("#replace2").slideToggle();//isoceles triangle
	} else {
		return $("#replace3").slideToggle();//scalene triangle
	}
};

//front-end
	$("input.formbtn").click(function(event) {
		event.preventDefault();
		var side1 = parseInt($("#side1").val());
		var side2 = parseInt($("#side2").val());
		var side3 = parseInt($("#side3").val());
		var show = triangle(side1, side2, side3);
		show;
	});
	$(".newbtn").click(function() {
		location.reload();
	});
});



