/*
arguments format: command [arguments] [options]
returns an object { command: command, option: option, argument: argument}
*/

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