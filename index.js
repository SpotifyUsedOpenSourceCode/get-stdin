'use strict';
module.exports = function (cb) {
	var ret = [];
	var len = 0;

	process.stdin.on('data', function (chunk) {
		ret.push(chunk);
		len += chunk.length;
	});

	process.stdin.on('end', function () {
		cb(Buffer.concat(ret, len));
	});
};
