/**
 * User Input
 *
 * Ask for the details of the website.
 */

'use strict';

const inquirer = require('inquirer');

const userInput = (name, input_type, message, error) => {
	let question = {
		name: name,
		type: input_type,
		message: message
	};

	if (name === 'remoteHostIP') {
		question.default = '192.168.95.100';
	} else if (name === 'remoteHostPort') {
		question.validate = function (value) {
			if (value.length) {
				return true;
			} else {
				return error;
			}
		};
	}
	return question;
};

module.exports = {
	askWebsiteDetails: () => {
		const questions = [
			userInput('remoteHostIP', 'input', 'Remote Host:', 'Please enter the IP address of the Remote Host.'),
			userInput('remoteHostPort', 'input', 'Remote Port:', 'Please enter the Port of the Remote Host.'),
		];
		return inquirer.prompt(questions);
	}
};
