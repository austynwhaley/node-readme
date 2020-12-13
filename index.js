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


    function generateReadme(answers){
        let licenseBadge = "";
        if(answers.license == "MIT"){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)"
        }else if (answers.license == "GPLv3"){
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }else if (answers.license == "AGPL"){
            licenseBadge = "[![AGPL License](https://img.shields.io/badge/license-AGPL-red.svg)](http://www.gnu.org/licenses/agpl-3.0)"
        }
        
        
    return`# ${answers.title}  ${licenseBadge}
    
    
${answers.license}
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
##### Email: ${answers.email}
    
`
}
    
promptUser()
.then((answers) => writeFileAsync('genREADME.md', generateReadme(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));