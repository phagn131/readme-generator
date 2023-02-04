// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('Start');
    // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Your Title?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a Title to continue.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please describe your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a Description.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'Installation',
        message: 'How will your project be installed?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a comment to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How will your project be used?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a usuage case to continue.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Are there other contributors to your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter additional contributors if any.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Were there any tests used in your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter tests if used.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Are there licenses you wish to include?',
        choices: ['MIT', 'GPL', 'Apache','Apache 2', ''],
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a license.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your gitub link for README generator feedback?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your link to github.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email for README generator feedback?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log('Completed, your README file is ready');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
