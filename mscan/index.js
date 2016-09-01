var fs = require('fs');
var mime = require('mime');
var mkdirp = require('mkdirp');

// promise scan(string pathname, object options): Scan the files in specific directory and returns with more informations
// string options.filter: RegExp for filter file names
function scan(pathname, options) {
	return new Promise(function(resolve, reject) {
		var scanDir = pathname;
		
		fs.readdir(scanDir, function(err, files) {
			if(err) {
				return reject({
					status: 500,
					message: err.message,
					stack: err.stack
				});
			}

			if(files.length === 0) {
				return resolve({});
			}

			// loop all files to get specific information
			var filesInfo = {};
			var done = 0;
			for(var i = 0; i < files.length; i++) {
				(function(filename) {
					fs.stat(scanDir + '/' + filename, function(err, stats) {
						if(err) {
							return reject({
								status: 500,
								message: err.message,
								stack: err.stack
							});
						}

						filesInfo[encodeURIComponent(filename)] = {
							stats: stats,
							mime: mime.lookup(scanDir + '/' + filename),
							isDirectory: stats.isDirectory()
						};

						done++;

						if(done === files.length) {
							return resolve(filesInfo);
						}
					});
				})(files[i]);
			}
		});
	});
}

module.exports = {
	scan: scan
};