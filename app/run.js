/**
 * Run the CLI.
 *
 * Runs all the functions of the CLI.
 */

'use strict';

const chalk = require('chalk');
const program = require('commander');
const checkFiles = require('./checkFiles');
const inquirer = require('./inquirer');
const install = require('./install');
const test = require('./test');

/**
 * Set the options for the CLI.
 *
 * Options:
 *   1. -v or --version — Version number of the CLI.
 *   2. -f or --force   — Force rewrite of the config if they already exists.
 *   3. -h or --help    — Show help.
 */
program
	.version('0.3.0', '-v, --version')
	.usage('[options]')
	.option('-f, --force', 'Overide existing WP-CLI configuration files.')
	.parse(process.argv)

// If force install option is set, then set it to true.
let forceInstall = false;
if (program.force) {
	forceInstall = true;
}

module.exports = async () => {
	// Welcome message.
	console.log(chalk.green('Setting up config files...\n'));

	// Config files array.
	const config_files = ['.dockerid', 'wp-cli.local.php', 'wp-cli.local.yml'];

	// Check if config files already exists.
	await checkFiles(config_files);

	// Ask for the details of the website.
	const websiteDetails = await inquirer.askWebsiteDetails();

	// Create the config files.
	await install(config_files, websiteDetails, forceInstall);

	// Test the CLI by running a WP-CLI command.
	await test();
}
