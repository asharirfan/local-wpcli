/**
 * Test WP-CLI
 *
 * Test the CLI by running a WP-CLI command.
 */

'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');

module.exports = async () => {

	const testResult = await exec(
		'wp option get siteurl'
	).catch(({ stderr }) => {

		// Test command failed due to some reason.
		console.error(`\n❌ ${stderr}`); // eslint-disable-line no-console
		return false;
	});

	if (false === testResult) {
		return;
	}

	const { stdout, stderr } = testResult;

	if (stderr) {
		console.error(`\n❌ ${stderr}`); // eslint-disable-line no-console
		return;
	}

	console.log( // eslint-disable-line no-console
		chalk.green(`\n✅  Successfully connected to ${stdout}`)
	);
};
