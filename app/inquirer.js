/**
 * User Input
 *
 * Ask for the details of the website.
 */

'use strict';

const inquirer = require('inquirer');

const userInput = (name, input_type, message, error) => (
	{
		name: name,
		type: input_type,
		message: message,
		validate: function (value) {
			if (value.length) {
				return true;
			}
			else {
				return error;
			}
		}
	}
);

module.exports = {
	askWebsiteDetails: () => {
		const questions = [
			userInput('remoteHostIP', 'input', 'Enter the IP address of the Remote Host:', 'Please enter the IP address of the Remote Host.'),
			userInput('remoteHostPort', 'input', 'Enter the Port of the Remote Host:', 'Please enter the Port of the Remote Host.'),
		];
		return inquirer.prompt(questions);
	}
};
