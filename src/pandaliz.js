var Pandaliz = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pandaLiz"></span>');
};

Pandaliz.prototype = Object.create(Dancer.prototype);
Pandaliz.prototype.constructor = Pandaliz;