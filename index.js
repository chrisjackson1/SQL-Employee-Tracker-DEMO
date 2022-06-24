//Imports package inquirer
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "list",
            name: 'options',
            message: 'Choose an option below: '
            choices: ["View all departments", "View all Roles", "View all Employees"]
        },
        {
            type: "input",
            name: 'roles',
            message: 'View all roles'
        },
        {
            type: "input",
            name: 'employees',
            message: 'View all employees'
        },

        {
            type: "input",
            name: 'employees',
            message: 'Add a department'
        },

        {
            type: "input",
            name: 'employees',
            message: 'View all employees'
        },
        {
            type: "List",
            name: 'employees',
            message: 'View all employees'
        },
    ])
    .then(answers => {
        console.info(answers);
        console.info(answers.departments);
        console.info(answers.roles);
        console.info(answers.employees);
        if(answers === )
    });

