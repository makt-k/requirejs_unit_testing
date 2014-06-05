    requirejs.config({
        paths: {
            'jquery':         'lib/jquery',
            'underscore':     'lib/underscore',
            'backbone':       'lib/backbone',
            'mocha':          'lib/mocha',
            'chai':           'lib/chai',
            'src': 		  'src/test1'
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



require(['jquery', 'underscore', 'backbone', 'mocha', 'chai'], function($, _, backbone, mocha, chai) {
	chai = require('chai'),
	expect = chai.expect,
  assert = chai.assert;

  mocha.setup('bdd');
});

require(['src'], function(src){
	   // Run tests on window load event.
		mocha.run();
		});


