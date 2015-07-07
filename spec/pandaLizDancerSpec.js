describe("pandaLizDancer", function() {

  var pandaLizDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pandaLizDancer = new Pandaliz(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(pandaLizDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(pandaLizDancer.$node, 'toggle');
    pandaLizDancer.step();
    expect(pandaLizDancer.$node.toggle.called).to.be.true;
  });

  it("should have a pandaLiz class for it's node", function() {
    sinon.spy();
    expect(pandaLizDancer.$node.attr("class")).to.be.equal("pandaLiz");
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(pandaLizDancer, "step");
      expect(pandaLizDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pandaLizDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pandaLizDancer.step.callCount).to.be.equal(2);
    });
  });
});
