/**
 * Files
 *
 * Config files related helper functions.
 */

'use strict';

const fs = require('fs');

module.exports = {
	fileExists(file) {
		return fs.existsSync(file);
	},

	local_php: (socket) => {
		return `<?php
define('DB_HOST', 'localhost:${socket}');
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');

// Only display fatal run-time errors.
// See http://php.net/manual/en/errorfunc.constants.php.
error_reporting(1);
define( 'WP_DEBUG', false );
`;
	},

	local_yml: () => {
		return `path: app/public
require:
  - wp-cli.local.php
`;
	}
};
