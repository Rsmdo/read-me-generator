// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(license);
    if (license === 'MIT License') {

        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    
    }else if (license === 'GNU General Public License v3.0') {

        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    
    }else if (license === 'Apache 2.0') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    
    }else if (license === 'None') {
        // empty string 
        return ""; 
    }
        
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    console.log(license);
    if (license === 'MIT License') {

        return `https://choosealicense.com/licenses/mit/`
    
    }else if (license=== 'GNU General Public License v3.0') {

        return `https://choosealicense.com/licenses/gpl-3.0/`
    
    }else if (license === 'Apache 2.0') {
        return `https://choosealicense.com/licenses/apache-2.0/`
    
    }else if (license === 'None') {
        // empty string 
        return ""; 
    }
        
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    console.log(license);
    if (license === 'MIT License') {

        return `The license used is ${renderLicenseLink(license)}.`
    
    }else if (license=== 'GNU General Public License v3.0') {

        return `The license used is ${renderLicenseLink(license)}.`
    
    }else if (license === 'Apache 2.0') {
        return `The license used is ${renderLicenseLink(license)}.`
    
    }else if (license === 'None') {
        // empty string 
        return ""; 
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under ${data.license}

  ## Contribution
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions 
  Any Questions? My email is  ${data.email} and my Github Username is  ${data.github}. 







`;
}

module.exports = generateMarkdown;