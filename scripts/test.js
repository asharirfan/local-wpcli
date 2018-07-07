/**
 * Utility: Test WP-CLI
 */

const { exec } = require('child_process');
const chalk = require('chalk');

module.exports = async () => {
	await exec('wp option get siteurl', (err, stdout, stderr) => {
		if (err) {
			console.log(`\n❌ ${stderr}`);
			return;
		}

		console.log(chalk.green(`\n✅  Successfully connected to ${stdout}`));
	});
};
