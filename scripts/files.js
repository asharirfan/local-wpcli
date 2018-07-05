/**
 * Utility: Files
 */

const path = require('path');
const touch = require('touch');

module.exports = {
	getCurrentDirectoryBase: () => {
		return path.basename(process.cwd());
	},

	createFile(filename) {
		touch(filename);
	}
};
