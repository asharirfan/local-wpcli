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

	// Set error message if the question is for Remote IP.
	question.validate = function (value) {
		if (value.length) {
			return true;
		} else {
			return error;
		}
	};

	// Return the question object.
	return question;
};

module.exports = {
	/**
	 * Prompt Input Questions.
	 */
	askWebsiteDetails: () => {
		const questions = [
			userInput(
				'socket',
				'input',
				'Socket:', 'Please enter the socket of the database.'
			), // Socket.
		];
		return inquirer.prompt(questions);
	}
};
