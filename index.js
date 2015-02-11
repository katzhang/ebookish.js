var fs = require('fs');
var path = require('path');
var walk = require('walk');
var argvParser = require('./lib/argvParser');
var ebookish = module.exports;


//list [all] df files
var ls = ebookish.ls = function(option, dir) {
	var output = [];
	var remaining = [];
	var options = {
		followLinks: false,
		filters: ['.git']
	}
	var walker = walk.walk(dir || '.', options);
	walker.on('file', fileHandler);

};

var fileHandler = function(root, fileStat, next) {
	if (path.extname(fileStat.name) === '.pdf') {
		console.log(fileStat.name);
	}
	next();
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

