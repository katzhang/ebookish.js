var fs = require('fs');
var path = require('path');
var argvParser = require('./lib/argvParser');
var ebookish = module.exports;


//list [all] df files
var ls = ebookish.ls = function(option, dir) {
	var output = [];
	fs.readdir(dir || '.', function(err, files) {
		if (err) {
			throw 'error!';
		} else {
			files.forEach(function(file, index, array) {
				if (path.extname(file) === '.pdf') {
					output.push(file);
				}
			});
		}

		return output;
	});

};



var runCli = ebookish.runCli = function(args) {
	var fn = ebookish[args.command];
	fn.apply(null, [args.option, args.directory]);
};

if (require.main === module) {
	try {
		runCli(argvParser(process.argv));
	} catch(e) {
		console.error(e);
	}
}

