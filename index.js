#!/usr/bin/env node
/**
 * local-wpcli
 *
 * Application entry file.
 *
 * @since 0.1.0
 */

'use strict';

const chalk = require('chalk');
const nodeVersion = process.versions.node;
const semVer = nodeVersion.split('.');
const major = semVer[0];

// If below Node 8.
if (major < 8) {
	console.error( // eslint-disable-line no-console
		chalk.red(
			`⚠️  You are running Node ${nodeVersion}
Local-WPCLI requires Node 8 or higher.
Kindly, update your version of Node.`
		)
	);
	process.exit(1);
}

// Crash the script on unhandled rejections.
process.on('unhandledRejection', (reason) => {
	console.log( // eslint-disable-line no-console
		'Unhandled Rejection due to reason:',
		reason
	);
});

/**
 * Run the CLI.
 */
const run = require('./app/run');
run();
