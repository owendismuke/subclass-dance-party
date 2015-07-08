var Pandaliz = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr("class","pandaLiz bounce");
};

Pandaliz.prototype = Object.create(Dancer.prototype);
Pandaliz.prototype.constructor = Pandaliz;
