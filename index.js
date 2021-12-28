// PrismaticDevelopmentStudios

const fs = require('fs');
const inquirer = require('inquirer');
const { template } = require('./src/template.js');
const { Manager, Engineer, Intern, Employee } = require('./lib/classes');

const questions = () => inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'What type of employee is being added?',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
        }, {
            type: "input",
            name: "name",
            message: "What is the developer's first name?"
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email?`,
        },
        {
            type: 'list',
            name: 'type',
            message: `What type of engineer is the developer?`,
            choices: ['QA', 'Full-Stack', 'Back-End', 'Front-End']
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

const addNew = () => inquirer.prompt([{
        type: 'confirm',
        name: 'add',
        message: 'Would you like to add a any new employees?'
    }])
    .then(answers => {
        if (answers.add) {
            questions()

        } else {
            console.log('Exit')
        }
    })
    .catch(err => {
        console.error(err);
    })
addNew();