const fs = require('fs');
const inquirer = require('inquirer');
const { template } = require('./src/template.js');

inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the developer's first name?"
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the developer's email?`
        },
        {
            type: 'list',
            name: 'type',
            message: `What type of engineer is the developer?`,
            "choices": ['QA', 'Full-Stack', 'Back-End', 'Front-End']
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the developer's GitHub username?`
        }
    ])
    .then(answers => {
        const data = template(answers);
        fs.writeFile('./dist/index.html', data, (err) => {
            if (err) {
                console.error(err);
            }
        })
    })
    .catch(err => {
        console.error(err);
    })