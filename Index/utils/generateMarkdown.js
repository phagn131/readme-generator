function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)
- [Contact Information](#contact-information)

## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributors:
${data.contributors}
## Tests:
${data.tests}
## License:
![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Contact Information:
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](user@email.com)`;
}

module.exports = generateMarkdown;
