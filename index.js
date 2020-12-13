const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => 
inquirer.prompt([
    {
        type: 'input',
        name: 'authors',
        message: 'Please enter the author(s) of the application',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your application',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Attach some instructions to intall your application',
      },
    {
        type: 'list',
        message: 'What kind of license would you like?',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'AGPL', 'None'],

    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
]);




  

const generateReadme = (answers) => 




`# ${answers.title}

## License



${answers.license} License

Copyright (c) [2020] [${answers.authors}]

---

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Questions](#Questions)
- [License](#license)
 

---


## Description

${answers.description}

---

## Installation

${answers.install}

---

## Usage


---

## Testing


---

## Contribution



---

## Questions

Any questions regarding the application can be answered at:

[Link to Github](https://github.com/${answers.github}/)
##### Email: austyn_whaley@yahoo.com`;

promptUser()
  .then((answers) => writeFileAsync('genREADME.md', generateReadme(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter a usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// function license (answers){
//     if(answers.license == 'MIT'){
//         answers.license == '[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)'
//     } else if (answers.license == 'GPLv3'){
//         answers.license == '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//     } else if (answers.license == 'AGPL'){
//         answers.license == '[![AGPL License](https://img.shields.io/badge/license-AGPL-red.svg)](http://www.gnu.org/licenses/agpl-3.0)'
//     }

//     return answers.license
