/**
 * Check files.
 *
 * Check if config files already exists &
 * show the messages accordingly.
 */

'use strict';

const chalk = require('chalk');
const files = require('./files');

module.exports = async (config_files) => {
	config_files.forEach(function (filename) {
		const file = `${process.cwd()}/${filename}`;

		if (files.fileExists(file)) {
			console.error(
				chalk.red(
					`❌  Error: ${filename} already exists!
✅  Use -f or --force to overide the existing files.
👉  For more details, check help.`
				)
			);
			process.exit(1);
		}
	});
}
