const connection = require("./connection");

class DB {
  // find all roles and join them with departments to display the depart. roles
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, role.department_id AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
      );
  }
  // find all employees and join them with departments to display the employees 
  findAllEmployee(){
      return this.connection
        .promise()
        .query ("SELECT employee.id, employee.first_name, employee.last_name AS employee, employee.role_id FROM employee LEFT JOIN department on role.department_id = department.id;"
        );
  }
  findAllDepartments(){
      return this.connection
      .promise()
      .query("SELECT department.id, FROM department INNER JOIN department on role.department_id = department.id;"
      );
  }
  findaRole(){
      return this.connection
      .promise()
      .query("SELECT role.id  FROM role LEFT JOIN department on role.department_id = department.id;"
      );
  }
  findaDepartment(){
      return this.connection
      .promise()
      .query("SELECT role.id  FROM role LEFT JOIN department on role.department_id = department.id;"
      );
  }
  findaEmployee(){
      return this.connection
      .promise()
      .query("SELECT employee.id  FROM employee LEFT JOIN department on role.department_id = department.id;"
      );
  }
  updateRole(){
    return this.connection
    .promise()
    .query("SELECT role.id  FROM role LEFT JOIN department on role.department_id = department.id;"
    );
}
}
