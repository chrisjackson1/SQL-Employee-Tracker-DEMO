//Imports package inquirer
const inquirer = require('inquirer');

const db = require('./server');

function createOptions(){
inquirer
    .prompt([
        {
            type: "list",
            name: 'options',
            message: 'Choose an option',
            choices: ['View All Roles', 'View All Employees','View All Departments','Add Role','Add Department','Add Employee','Update Employee Role']
        }
    ])
    .then(answers => {
        //set up a switch case,
        //in the case of view all roles, then we'll go ahead an make a view all roles SQL QUery
        //in the case
    //   const departments = new Departments(answers.departments, answer.roles, answer.employees) 
    //     console.log(departments);
        //if(answers === )
        let choice = res.options;
        switch (choice) {
            case "View All Roles":
                // Call the view all roles function
                viewRoles();
                break;
            case "View All Employees":
            // Call the view all Employees function
            viewAllEmploy();
            break;

        }
    });
}

function viewRoles() {
    db.findAllRoles()
}



createOptions();
