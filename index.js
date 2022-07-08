//Imports package inquirer
const inquirer = require("inquirer");

const db = require("./db/connection");
const newdb = require("./db/index");

function createOptions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Choose an option",
        choices: [
          "View All Roles",
          "View All Employees",
          "View All Departments",
          "Add Role",
          "Add Department",
          "Add Employee",
          "Update Employee Role",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      //set up a switch case,
      //in the case of view all roles, then we'll go ahead an make a view all roles SQL QUery
      //in the case
      //   const departments = new Departments(answers.departments, answer.roles, answer.employees)
      //     console.log(departments);
      //if(answers === )
      let choice = answers.options;
      switch (choice) {
        case "View All Roles":
          // Call the view all roles function
          viewRoles();
          createOptions()
          break;
        case "View All Employees":
          // Call the view all Employees function
          viewAllEmployee()
          createOptions()
          break;
        case "View All Departments":
          viewAllDepartments();
          createOptions()
          break;
        case "Add Role":
          addARole();
          createOptions()
          break;
        case "Add Department":
          addADepartment();
          createOptions()
          break;
        case "Add Employee":
          addAEmployee();
          createOptions()
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          createOptions()
          break;
        default:
          return console.log("Thank you, goodbye!")
      }
    });
}

function viewRoles() {
  const sql = `SELECT role.id, role.title, role.salary, department.name FROM role INNER JOIN department ON role.department_id = department.id `
  ;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`\n\n\n`)
    console.table(rows);
  });
}
function viewAllEmployee() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`\n\n\n`)
    console.table(rows);
  });
}
function viewAllDepartments() {
  const sql = `SELECT id, name AS title FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`\n\n\n`)
    console.table(rows);
  });
}
function addARole() {
  //const sql = `INSERT INTO role, first_name, last_name, salary, department_id `
   ;
   inquirer
   .prompt([
     {
       type: "input",
       name: "Role",
       message: "Add the roles information "
     }])
     .then(function(answers){
       console.log(answers)
     })

  // db.query(sql, (err, rows) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(`\n\n\n`)
  //   console.table(rows);
  // });
}
function addADepartment() {
  const sql = `SELECT id, department_id FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
  });
}
function addAEmployee() {
  const sql = `SELECT first_name, last_name, role_id FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
  });
}
function updateEmployeeRole() {
  const sql = `SELECT first_name, last_name, role_id, manager_id FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(rows);
  });
}

createOptions();
