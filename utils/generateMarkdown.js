 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return ''
  }else {
    return `[![Generic badge](https://img.shields.io/badge/License-${license.split("-").join("")}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return ''
  }else {
    return 'https://choosealicense.com/licenses/${license.toLowerCase()}/'
  }
   
}

 // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==='No License'){
    return `No License Was Used For This Project`
  }else if( license === 'Apache-2.0'){
    return `https://choosealicense.com/licenses/apache-2.0/`
  }
  else if( license === 'ISC'){
    return `https://choosealicense.com/licenses/isc/`
  }
  else if( license === 'GPL-3.0'){
    return `https://choosealicense.com/licenses/gpl-3.0/`
  }
  else if( license === 'MIT'){
    return `https://choosealicense.com/licenses/mit/`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.projDescription}

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions
  For any questions, please feel free to reach out to me at the following:

  Github: https://github.com/${data.github}

  Email: ${data.email}


  ## License

  ### ${data.license}

  Read About The License Here: 
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
