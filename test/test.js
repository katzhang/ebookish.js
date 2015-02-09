var ebookish = require('../index');
var argvParser = require('../lib/argvParser');
var assert = require('assert');

describe('argvParser', function() {
	it('can parse argv with command and options', function() {
		var argv = ['node', 'xx.js', 'ls', '--all'];
		var parsedObj = argvParser(argv);
		console.log(parsedObj);
		assert.deepEqual(parsedObj, {
			command: 'ls',
			option: 'all',
			argument: undefined
		})

	});
});