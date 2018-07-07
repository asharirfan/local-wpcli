#!/usr/bin/env node
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
const inquirer = require('./scripts/inquirer');
const fs = require('fs');

clear();

console.log(
	chalk.green(
		figlet.textSync('Local-WPCLI', { horizontalLayout: 'full' })
	)
);

const run = async () => {
	const websiteDetails = await inquirer.askWebsiteDetails();

	console.log(chalk.green('\nSetting up config files...'));

	const config_files = ['.dockerid', 'wp-cli.local.php', 'wp-cli.local.yml'];

	config_files.forEach(function (filename) {
		// Set file path.
		const file_path = `process.cwd()}/${filename}`;

		if (filename === '.dockerid') {
			fs.writeFile(file_path, websiteDetails.dockerId, (err) => {
				if (err) throw err;
			});
		} else if (filename === 'wp-cli.local.php') {
			fs.writeFile(
				file_path,
				files.local_php(websiteDetails.remoteHostIP, websiteDetails.remoteHostPort),
				(err) => {
					if (err) throw err;
				}
			);
		} else if (filename === 'wp-cli.local.yml') {
			fs.writeFile(file_path, files.local_yml(), (err) => {
				if (err) throw err;
			});
		}
	});

	console.log(chalk.green('\n👍  All done.'));
	console.log(chalk.green('\n✅  Try running a command with WP-CLI now.'));
}
run();
