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
        name: 'description',
        message: 'Enter your project description here:',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your projects installation instructions here:',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your projects usage information here:',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter your projects contribution guidelines here:',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your projects test instructions here:',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: [
            'MIT License',
            'GNU General Public License v3.0',
            'Apache 2.0',
            'none',
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: '(REQUIRED) Enter your GitHub username here:',
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
        name: 'email',
        message: '(REQUIRED) Enter your email address here:',
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
function writeToFile(fileName, license) {
    fs.writeFile(fileName, license, 'utf8', err => err ? console.log(err) : console.log('Your Readme.md is created!!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(license) {
        writeToFile('README.md', generateMarkdown(license))
    })
}

// Function call to initialize app
init();