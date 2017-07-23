 var pointsArray = document.getElementsByClassName('point');
 
 var animatePoints = function(points) {

 
     var revealFirstPoint = function() {
         points[0].style.opacity = 1;
         points[0].style.transform = "scaleX(1) translateY(0)";
         points[0].style.msTransform = "scaleX(1) translateY(0)";
         points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
     };
 
     var revealSecondPoint = function() {
         points[1].style.opacity = 1;
         points[1].style.transform = "scaleX(1) translateY(0)";
         points[1].style.msTransform = "scaleX(1) translateY(0)";
         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
     };
 
     var revealThirdPoint = function() {
         points[2].style.opacity = 1;
         points[2].style.transform = "scaleX(1) translateY(0)";
         points[2].style.msTransform = "scaleX(1) translateY(0)";
         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
     };
 
     revealFirstPoint();
     revealSecondPoint();
     revealThirdPoint();
 
 };

window.onload = function() {
 
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
 
 
 var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
   }