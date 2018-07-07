#!/usr/bin/env node
/**
 * local-wpcli
 *
 * Application entry file.
 *
 * @since 0.1.0
 */

const chalk = require('chalk');
const inquirer = require('./scripts/inquirer');
const program = require('commander');
const install = require('./scripts/install')

program
	.version('0.1.0', '-v, --version')
	.usage('[options]')
	.option('-f, --force', 'Overide existing WP-CLI configuration files.')
	.parse(process.argv)

let forceInstall = false;
if (program.force) {
	forceInstall = true;
}

const run = async () => {
	console.log(chalk.green('Setting up config files...\n'));

	const websiteDetails = await inquirer.askWebsiteDetails();

	const config_files = ['.dockerid', 'wp-cli.local.php', 'wp-cli.local.yml'];

	await install(config_files, websiteDetails, forceInstall);

	console.log(chalk.green('\n👍  All done.'));
	console.log(chalk.green('\n✅  Try running a command with WP-CLI now.'));
}
run();
