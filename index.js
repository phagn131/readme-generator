// External packages
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'phagn131',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    }
];

init();