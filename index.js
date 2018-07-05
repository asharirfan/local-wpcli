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
// const files = require('./scripts/files');
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
		if (filename === '.dockerid') {
			let data = websiteDetails.dockerId;
			fs.writeFile(`${process.cwd()}/${filename}`, data, (err) => {
				if (err) throw err;
			});
		} else if (filename === 'wp-cli.local.php') {
			let data = `<?php
define('DB_HOST', '${websiteDetails.remoteHostIP}:${websiteDetails.remoteHostPort}');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');

// Only display fatal run-time errors.
// See http://php.net/manual/en/errorfunc.constants.php.
error_reporting(1);
define( 'WP_DEBUG', false );
`;
			fs.writeFile(`${process.cwd()}/${filename}`, data, (err) => {
				if (err) throw err;
			});
		} else if (filename === 'wp-cli.local.yml') {
			let data = `path: app/public
require:
  - wp-cli.local.php
`;
			fs.writeFile(`${process.cwd()}/${filename}`, data, (err) => {
				if (err) throw err;
			});
		}
	});

	console.log(chalk.green('\n👍  All done.'));
	console.log(chalk.green('\n✅  Try running a command with WP-CLI now.'));
}
run();
