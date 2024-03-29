/**
 * Create Files.
 *
 * Create the config files.
 *
 * @param array  - Array of config files.
 * @param object - Website details object.
 * @param bool   - Force overide.
 */

'use strict';

const fs = require('fs');
const files = require('./files');

module.exports = (config_files, data, force) => {

	config_files.forEach(function (filename) {

		// Set file path.
		const file = `${process.cwd()}/${filename}`;

		if (!files.fileExists(file) || force) {

			if (filename === 'wp-cli.local.php') {
				fs.writeFile(
					file,
					files.local_php(data.socket),
					(err) => {
						if (err) throw err;
					}
				);
			} else if (filename === 'wp-cli.local.yml') {
				fs.writeFile(file, files.local_yml(), (err) => {
					if (err) throw err;
				});
			}
		}
	});
};
