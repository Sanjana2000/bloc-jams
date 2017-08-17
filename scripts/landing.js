//#5//
var animatePoints = function () {
 var revealPoint = function () {
  
 //#7//
   $(this).css({
    opacity: 1,
    transform: 'scaleX(1) translateY(0)'
   });
  };
  
//#6//
 $.each($('.point'), revealPoint);

};

 /*window.onload = function() {*/

$(window).load(function () {

	// Automatically animate the points on a tall screen where scrolling can't trigger the animation
     /*if (window.innerHeight > 950) {
         animatePoints(pointsArray);*/
  //#1//
 if ($(window).height() > 950) {
  animatePoints();
 }

	/* var sellingPoints = document.getElementsByClassName('selling-points')[0];

//#2//
	 var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;*/
 var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

//#3//
	/*window.addEventListener('scroll', function(event) {*/
 $(window).scroll(function (event) {

		 /*if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);*/
        //#4//
  if ($(window).scrollTop() >= scrollDistance) {
   animatePoints();

  }
 });
 /*}*/
});









