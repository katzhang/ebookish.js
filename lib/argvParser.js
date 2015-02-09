/*
arguments format: command [arguments] [options]
1. parse process.argv and verify if the file/dir exists
2. if the file/dir doesn't exist throw an error
3. if command/options don't match exiting options map throw an error
4. if everything seems fine return an object
*/

var commandList = ['ls'];
var optionMap = [
	{
		command: 'ls',
		option: '--all'
	}
];

//argv: process.argv, array

var argvParser = module.exports = function(argv) {
	var command = argv[2], option, argument, i;

	for(i = 3; i < argv.length; i++) {
		if (argv[i].match(/^-/)) {
			option = argv[i].replace(/^-+/, '');
		} else {
			argument = argv[i];
		}
	};

	return {
		command: command,
		option: option,
		argument: argument
	}
};