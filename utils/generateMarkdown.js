// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (data === 'MIT License') {
        // have to add code for badge
    
    }else if (data === 'GNU General Public License v3.0') {
        // have to add code for badge
    
    }else if (data === 'Apache 2.0') {
        // have to add code for badge
    
    }else if (data === 'None') {
        // empty string 
        return ""; 
    }
        
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;