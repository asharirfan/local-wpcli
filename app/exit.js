/**
 * CLI exit.
 */

const end = require('exit-cli');
const pkgJson = require('../package.json');

const exit = async () => {

	await end({
		github: 'https://github.com/asharirfan/local-wpcli',
		twitter: 'https://twitter.com/MrAsharIrfan',
		pkgJSON: pkgJson
	})
}
module.exports = exit;
