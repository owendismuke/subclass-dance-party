$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    for( var i = 0; i < window.dancers.length; i++ ){
      window.dancers[i].lineUp();
    }
  });

  $(".backToDancing").on("click", function(event){
    for( var i = 0; i < window.dancers.length; i++ ){
      window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left);
    }
  });

  $('body').on('mouseover', 'span', function(event){
    //Toggle rotation
    $(this).removeClass("bounce");
    $(this).toggleClass("rotate");
  });

  //We can not get to work -_-

  // Math.floor(Math.random() * (window.dancers.length - 1))
  // var updateDancers = function(){

  //   var arr = [];
  //   for(var i = 0; i < window.dancers.length; i++){
  //     var closestDancer = window.dancers.reduce(function(prev, curr){
  //       //get distance from window.dancer[i] on current
  //       var currentDistance = Math.sqrt(Math.pow(curr.top - window.dancers[i].top, 2) + Math.pow(curr.left - window.dancers[i].left, 2));
  //       //if current closer than previous
  //       if(prev){
  //         if(prev[0] < currentDistance){
  //           return prev;
  //         }
  //       }

  //       return [currentDistance, curr];
  //     });

  //   //move or something to that dancer
  //     //halve the lefts
  //     var halfLeft = window.dancers[i].left > closestDancer[1].left ? window.dancers[i].left - closestDancer[1].left : closestDancer[1].left - window.dancers[i].left;
  //     //halve the tops to get the middle
  //     var halfTop = window.dancers[i].top > closestDancer[1].left ? window.dancers[i].top - closestDancer[1].top : closestDancer[1].top - window.dancers[i].top;
  //     //setPosition window dancer on halves for top and left
  //     window.dancers[i].setPosition(halfTop, halfLeft);
  //     //setposition closest dancer on half for top and half left + 100
  //     closestDancer[1].setPosition(halfTop, halfLeft + 100);
  //   }
  // };

  // setInterval(updateDancers, 5000);

});

