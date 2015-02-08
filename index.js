var fs = require('fs');
var path = require('path');
var dir = process.argv[2] || __dirname.toString();
var ebookish = module.exports;

//list all pdf files
ebookish.ls = function() {
	fs.readdir(dir, function(err, files) {
		if (err) {
			throw 'error!';
		} else {
			files.forEach(function(file, index, array) {
				if (path.extname(file) === '.pdf') {
					console.log(file);
				}
			});
		}
	});
};