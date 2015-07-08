var Octoadam = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class","octoAdam");
};

Octoadam.prototype = Object.create(BlinkyDancer.prototype);
Octoadam.prototype.constructor = Octoadam;