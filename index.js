// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: '(REQUIRED) What is your project title?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
              return true;
            }else {
              console.log("Please enter your title");
              return false;
            }
        }

    },
    {
        type: 'input',
        message: 'Enter your project description here:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your projects installation instructions here:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter your projects usage information here:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your projects contribution guidelines here:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter your projects test instructions here:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select a license',
        choices: [
            'MIT',
            'GNU GPL v3',
            'Apache 2.0',
            'none',
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: '(REQUIRED) Enter your GitHub username here:',
        name: 'github',
        validate: githubInput => {
            if (githubInput) {
              return true;
            }else {
              console.log("Please enter your Github username");
              return false;
            }
        }
    },
    {
        type: 'input',
        message: '(REQUIRED) Enter your email address here:',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
              return true;
            }else {
              console.log("Please enter your email");
              return false;
            }
        }
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', err => err ? console.log(err) : console.log('Your Readme.md is created!!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();