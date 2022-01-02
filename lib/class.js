// Required NPM Modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('../src/classes');
const { manager, engineer, intern } = require('./template.js');
let employees = [];
let index;
fs.writeFileSync('./dist/employees.html', '', (err) => {
    console.error(err);
});
const addEmployee = () => inquirer.prompt([{
        type: 'list',
        name: 'type',
        message: 'What type of empoyee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    }]).then(answers => {
        if (answers.type === 'Manager') {
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
                        name: 'office',
                        message: 'Office number?'
                    },
                ])
                .then(answers => {
                    const newManager = new Manager((index++), answers.name, 'Manager', answers.email, answers.office);
                    employees.push(newManager);
                    let data = manager(answers);
                    fs.appendFile('./dist/employees.html', data, (err) => {
                        console.error(err);
                    });
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
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
                    fs.appendFile('./dist/employees.html', data, (err) => {
                        console.error(err);
                    });
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
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
                    fs.appendFile('./dist/employees.html', data, (err) => {
                        console.error(err);
                    });
                    inquirer.prompt([{
                            type: 'confirm',
                            name: 'continue',
                            message: 'Would you like to add another employee?',
                        }])
                        .then(answers => {
                            if (answers.continue) {
                                addEmployee();
                            }
                        })
                })
        }

        function htmlGenerator(employees) {
            return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prismatic Dev Team</title>
            </title>
            <!-- Font Awesome -->
            <script src="https://kit.fontawesome.com/8f9f5cba36.js" crossorigin="anonymous"></script>
            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        
        <body>
        <div class="row">
        ${employees}
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </body>
        
        </html>
        `
        };
        console.log(employees, 153);
        fs.writeFile('./dist/index.html', htmlGenerator(employees), (err) => {
            console.error(err);
        });
    })
    .catch(err => {
        console.error(err);
    })
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