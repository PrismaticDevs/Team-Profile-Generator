// Required NPM Modules
const fs = require('fs');
const inquirer = require('inquirer');
// Employee classes
const { Manager, Engineer, Intern } = require('./src/classes');
const { manager, engineer, intern } = require('./lib/template.js');
// Generator Function
const { htmlGenerator } = require('./src/generator');
// Global Vars
let index;
let employees = [];
let htmlTemplate = [];
// Resets the index.html file
function finishTemplate() {
    fs.writeFile('./dist/index.html', htmlGenerator(htmlTemplate.join('')), (err) => {
        if (err) {
            console.error(err);
        }
    });
}
// How to make async and wait the template
const addEmployee = () => inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'What type of empoyee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    }]).then(answers => {
        // Checks for Employee Type Seklection
        if (answers.type === 'Manager') {
            inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What is the first name?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Email?'
                    },
                    {
                        type: 'input',
                        name: 'office',
                        message: 'Office number?'
                    },
                ])
                .then(answers => {
                    const newManager = new Manager((index++), answers.name, 'Manager', answers.email, answers.office);
                    employees.push(newManager);
                    let data = manager(answers);
                    htmlTemplate.push(data);
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
                            } else {
                                finishTemplate();
                            }
                        })
                })
        } else if (answers.type === 'Engineer') {
            inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What is the firstname?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Email?'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'GitHub username?'
                    },
                ])
                .then(answers => {
                    const newEngineer = new Engineer(index++, answers.name, 'Engineer', answers.email, answers.github);
                    employees.push(newEngineer);
                    let data = engineer(answers);
                    htmlTemplate.push(data);
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
                            } else {
                                finishTemplate();
                            }
                        })
                })
        } else if (answers.type === 'Intern') {
            inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What is the firstname?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Email?'
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'School?'
                    },
                ])
                .then(answers => {
                    const newIntern = new Intern(index++, answers.name, 'Intern', answers.email, answers.school);
                    employees.push(newIntern);
                    let data = intern(answers);
                    htmlTemplate.push(data);
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
                            } else {
                                finishTemplate();
                            }
                        })
                })
        }
    })
    .catch(err => {
        if (err) {
            console.error(err);
        }
    });
// Might be that this promise needs to resolve first
addEmployee();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated