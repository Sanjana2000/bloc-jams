

      var animatePoints = function () {

      var points = document.getElementsByClassName('point');


      var revealFirstPoint = function () {
          points[0].style.opacity = 1;
          points[0].style.transform = "scaleX(1) translateY(0)";
          points[0].style.msTransform = "scaleX(1) translateY(0)";
          points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
      };

      var revealSecondPoint = function () {
          points[1].style.opacity = 1;
          points[1].style.transform = "scaleX(1) translateY(0)";
          points[1].style.msTransform = "scaleX(1) translateY(0)";
          points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
      };

      var revealThirdPoint = function () {
          points[2].style.opacity = 1;
          points[2].style.transform = "scaleX(1) translateY(0)";
          points[2].style.msTransform = "scaleX(1) translateY(0)";
          points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
      };

      revealFirstPoint();
      revealSecondPoint();
      revealThirdPoint();


     };

     var pointsArray = document.getElementsByClassName('point');


        var revealPoint = function (point) {
                points.style.opacity = 1;
                points.style.transform = "scaleX(1) translateY(0)";
                points.style.msTransform = "scaleX(1) translateY(0)";
                points.style.WebkitTransform = "scaleX(1) translateY(0)";
     };
     var animatePoints = function (points) {
            forEach(points, revealPoints);

     };



     // #1
   if (window.innerHeight > 950) {
          animatePoints(pointsArray);
      }


     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     // #2
      var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

     // #3
      $(window).scroll(function (event) {

     //#4
          if ($(window).scrollTop() >= scrollDistance) {
              animatePoints();
        }
      });
   });





      $(window).load(function() {

       // #1
         if ($(window).height() > 950) {
          animatePoints();
      }
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

     $(window).scroll(function(event) {

       if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
          }
      });
    });

