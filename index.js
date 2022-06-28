//Imports package inquirer
const inquirer = require('inquirer');

function createOptions(){
inquirer
    .prompt([
        {
            type: "list",
            name: 'options',
            message: 'View all roles',
            choices: ['View All Roles', 'View All Employees','View All Departments','Add Role','Add Department','Add Employee','Update Employee Role']
        }
    ])
    .then(answers => {
        //set up a switch case,
        //in the case of view all roles, then we'll go ahead an make a view all roles SQL QUery
        //in the case
      const departments = new Departments(answers.departments, answer.roles, answer.employees) 
        console.log(departments);
        //if(answers === )
    });
}

createOptions();
