/**
 * local-wpcli
 *
 * Application entry file.
 *
 * @since 0.1.0
 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./scripts/files');

clear();

console.log(
	chalk.green(
		figlet.textSync('Local-WPCLI', { horizontalLayout: 'full' })
	)
);
