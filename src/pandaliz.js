var Pandaliz = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class","pandaLiz");
};

Pandaliz.prototype = Object.create(BlinkyDancer.prototype);
Pandaliz.prototype.constructor = Pandaliz;