// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
    
- [Description](#description)
- [Table of Contents](#tableofcontents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Testing](#testing)
- [Questions](#questions)

# Description

${data.description}

# Table of Contents

${data.table}

# Installation

${data.installation}

## Usage

${data.usage}

## License
  
${data.license}
  
## Contributors

${data.contributors}

## Testing

${data.testing}
## Questions

${data.questions}

Contact Information:
  - GitHub: ${data.repo}
  - Email: `;
}

module.exports = generateMarkdown;
