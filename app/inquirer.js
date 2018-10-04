/**
 * User Input
 *
 * Ask for the details of the website.
 */

'use strict';

const inquirer = require('inquirer'); // Include inquirer.

/**
 * Generate Question Object
 *
 * Generate input question object for inquirer.
 *
 * @param {string} name       – Input name.
 * @param {string} input_type – Input type.
 * @param {string} message    – Input prompt.
 * @param {string} error      – Input error message.
 */
const userInput = (name, input_type, message, error) => {
	// Inquirer question object.
	let question = {
		name: name,
		type: input_type,
		message: message
	};

	if (name === 'remoteHostIP') {
		// Set default IP if the question is for Remote Host.
		question.default = '192.168.95.100';
	} else if (name === 'remoteHostPort') {
		// Set error message if the question is for Remote IP.
		question.validate = function (value) {
			if (value.length) {
				return true;
			} else {
				return error;
			}
		};
	}

	// Return the question object.
	return question;
};

module.exports = {
	/**
	 * Prompt Input Questions.
	 */
	askWebsiteDetails: () => {
		const questions = [
			userInput('remoteHostIP', 'input', 'Remote Host:', 'Please enter the IP address of the Remote Host.'), // Remote Host.
			userInput('remoteHostPort', 'input', 'Remote Port:', 'Please enter the Port of the Remote Host.'), // Remote IP.
		];
		return inquirer.prompt(questions);
	}
};
