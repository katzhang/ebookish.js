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
			directory: undefined
		})

	});

	it('can parse argv with command and options and argument', function() {
		var argv = ['node', 'xx.js', 'ls', 'book-1.pdf', '--all'];
		var parsedObj = argvParser(argv);

		assert.deepEqual(parsedObj, {
			command: 'ls',
			option: 'all',
			directory: 'book-1.pdf'
		})
	});
});

describe('ebookish', function() {

	describe('#ls', function() {

		it('list pdf files in the specified folder', function() {
			var dir = 'sample_dir';
			var output = ebookish.ls(undefined, dir);
			//Injecting dones force adding callback argument into testing function
			setTimeout(function() {
				assert.equal(output, ['book-1.pdf', 'book-2.pdf']);
			}, 100);
		})
	});
});

