var ebookish = require('../index');
var argvParser = require('../lib/argvParser');
var assert = require('assert');

describe('argvParser', function() {
	it('can parse argv with command without options or argument', function() {
		var argv = ['node', 'xx.js', 'ls'];
		var parsedObj = argvParser(argv);

		assert.deepEqual(parsedObj, {
			command: 'ls',
			option: undefined,
			argument: undefined
		})

	});

	it('can parse argv with command and options and argument', function() {
		var argv = ['node', 'xx.js', 'ls', 'book-1.pdf', '--all'];
		var parsedObj = argvParser(argv);

		assert.deepEqual(parsedObj, {
			command: 'ls',
			option: 'all',
			argument: 'book-1.pdf'
		})
	});
});

