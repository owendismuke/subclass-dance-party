var Robochris = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class","roboChris");
};

Robochris.prototype = Object.create(Dancer.prototype);
Robochris.prototype.constructor = Robochris;