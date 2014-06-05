// defining dependencies that this file will need in order to run
// using RequireJS's define() call
define(['underscore',
	'backbone',
	'mocha',
	'chai',
	'sinon_chai',
	'sinon'
	],
	function(_, backbone, mocha, chai, sinon_chai, sinon) {

 // Testing Mocha's skip() function
 // describe() takes a string as the first param, which will serve as the title of the test
 // the second param is the function contains the tests
  describe("Mocha `skip`", function () {
    it.skip("doesn't run this test", function () {
      expect(true).to.be.true;
    });

    it.skip("also doesn't run this test", function () {
      expect(true).to.be.true;
    });

    it("runs this test", function () {
      expect(false).to.be.false;
    });
  });

	// testing Mocha + Chai bdd syntax
	describe("BDD example", function () {
    // the before() call will execute code once before all tests start.
    before(function () {
      // add a local function.
      this.hello = function () {
        return "Hello world!";
      };
    });

    // the after() call will execute code once when all tests finish.
    after(function () {
      // remove local function.
      this.hello = null;
    });

    // the test
    // using Chai with Mocha to check whether code was executed as expected
    it("should return expected string result", function () {
      // Chai BDD-style assertion
      // chainable
      expect(this.hello()).to.be.a("string").and.equal("Hello world!");
    });
  });

	// testing Sinon
  describe("Sinon.JS spies", function () {
    it("calls anonymous spy on event", function () {
      var eventer = _.extend({}, Backbone.Events),
        spy = sinon.spy();

      // set up the spy.
      eventer.on("foo", spy);
      expect(spy.called).to.be.false;

      // fire event.
      eventer.trigger("foo", 42);

      // check number of calls.
      expect(spy.calledOnce).to.be.true;
      expect(spy.callCount).to.equal(1);

      // check calling arguments.
      expect(spy.firstCall.args[0]).to.equal(42);
      expect(spy.calledWith(42)).to.be.true;
      });
    });


});