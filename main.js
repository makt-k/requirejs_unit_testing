requirejs.config({
	// baseUrl is the directory that houses this main.js file
	baseUrl: '.',
  // setting paths to the modules that we want requirejs to load
  paths: {
      'jquery':         'lib/jquery',
      'underscore':     'lib/underscore',
      'backbone':       'lib/backbone',
      'mocha':          'lib/mocha',
      'chai':           'lib/chai',
      'src': 		  			'src/test1',
      'sinon_chai':     'lib/sinon-chai',
      'sinon':          'lib/sinon'
  },
  // configuring exports, dependencies ('deps:') of the above etc.
  // shims make the above AMD compliant
  // 'exports' are used to set global variables that non AMD modules introduce, giving local references to the modules
  shim: {
    'jQuery': {
        exports: '$'
    },
    'underscore': {
        exports: '_'
    },
    'backbone': {
    		exports: 'backbone'
    },
    'mocha': {
  			exports: 'mocha'
  	},
    'chai': {
    		exports: 'chai'
    },
    'sinon_chai': {
      exports: 'sinon_chai'
    },
    'sinon': {
      exports: 'sinon'
    },
	},
	waitSeconds: 15
});

// require call takes an array of modules as the first arg
// and a function as the second arg, with the variables exported from the shims passed as its params
require([
  'jquery',
  'underscore',
  'backbone',
  'mocha',
  'chai',
  'sinon_chai',
  'sinon'
  ],
  function($, _, backbone, mocha, chai, sinon_chai, sinon) {
	// setting global variables for the app
  chai = require('chai'),
	expect = chai.expect,
  assert = chai.assert;
  // we are using Mocha's bdd syntax (instead of tdd)
  mocha.setup('bdd');
});
// need a second require call as RequireJS loads asynchronously
//and we need the JS libraries to load first and setup Mocha before running the test suite
require(['src'], function(src){
   // run test either in the terminal with mocha-PhantomJS or in the browser
	 if (window.mochaPhantomJS) {
      mochaPhantomJS.run();
    } else { mocha.run();
  }
});


