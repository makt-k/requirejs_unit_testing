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
      'src': 		  			'src/test1'
      // 'sinon-chai':     'libs/chai/sinon-chai',
      // 'sinon':          'libs/sinon/lib/sinon',
      // 'sinon-assert':   'libs/sinon/lib/assert',
      // 'sinon-spy':      'libs/sinon/lib/spy',
      // 'sinon-behavior': 'libs/sinon/lib/behavior',
      // 'sinon-call':     'libs/sinon/lib/call',
      // 'sinon-collection': 'libs/sinon/lib/collection',
      // 'sinon-match':    'libs/sinon/lib/match',
      // 'sinon-mock':     'libs/sinon/lib/mock',
      // 'sinon-test':     'libs/sinon/lib/test',
      // 'sinon-sandbox':  'libs/sinon/lib/sandbox',
      // 'sinon-stub':     'libs/sinon/lib/stub',
      // 'sinon-testcase': 'libs/sinon/lib/test_case'
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
    }
	},
	waitSeconds: 15
});

// require call takes an array of modules as the first arg
// and a function as the second arg, with the variables exported from the shims passed as its params
require(['jquery', 'underscore', 'backbone', 'mocha', 'chai'], function($, _, backbone, mocha, chai) {
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


