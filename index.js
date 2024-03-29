require("console.table");
const inquirer = require("inquirer");
const db = require("./config/connection");


const questions = async () => {
    await inquirer.prompt(
        {
          name: "menu",
          type: "list",
          message: "MAIN MENU",
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
          ],
        })

        .then(function(choice) {
          switch (choice.menu) {
            case "View All Departments":
              allDepts();
              break;
            case "View All Roles":
              allRoles();
              break;
            case "View All Employees":
              allEmployees();
              break;
            case "Add a Department":
              addDept();
              break;
            case "Add a Role":
              addRole();
              break;
            case "Add an Employee":
              addEmployee();
              break;
            case "Update an Employee Role":
              updateEmployee();
              break;
            case "Exit":
              process.exit();
                    
          }
        })
};

function allDepts() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw (err);
    console.table(res);
  
  }
)};

function allRoles() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw (err);
    console.table(res);
  
  }
)};

function allEmployees() {
  db.query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", (err, res) => {
    if (err) throw (err);
    console.table(res);
  
  }
)};

const addDept = async () => {
  await inquirer.prompt (
    {
        type: 'input',
        name: 'newDept',
        message: 'What is the name of the new Department you would like to add?'

    })

    .then(function(deptName){
      db.query("INSERT INTO department (name) VALUES (?)", [deptName.newDept], (err, res) => {
        if (err) throw (err);
        console.table(res);

    })})
};

const addRole = async () => {
  await inquirer.prompt ([
    {
        type: 'input',
        name: 'newRole',
        message: 'What is the name of the new Role you would like to add?'

    },
    {
        type: 'input',
        name: 'newSalary',
        message: 'What is the salary of the new Role?'

    },
    {
        type: 'input',
        name: 'newRoleDept',
        message: 'What is the id of the department the new Role belongs to?'
    }]
    )

    .then(function(roleName){
      db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [roleName.newRole, roleName.newSalary, roleName.newRoleDept] , (err, res) => {
        if (err) throw (err);
        console.table(res);

})})
};

const addEmployee = async () => {
  await inquirer.prompt([
    {
      type: "input",
      message: "What's the first name of the employee?",
      name: "newFirstName"
    },
    {
      type: "input",
      message: "What's the last name of the employee?",
      name: "newLastName"
    },
    {
      type: "input",
      message: "What is the employees role id number?",
      name: "newRoleID"
    },
    {
      type: "input",
      message: "What is the manager id number?",
      name: "managerID"
    }]
  )

  .then(function(employeeName){
    db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [employeeName.newFirstName, employeeName.newLastName, employeeName.newRoleID, employeeName.managerID] , (err, res) => {
      if (err) throw (err);
      console.table(res);

    })})
  };

 
const updateEmployee = async () => {
  await inquirer.prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "employeeUpdate"
      },

      {
        type: "input",
        message: "What is the employees new role ID?",
        name: "roleUpdate"
      }]
    )

    .then(function(update){
      db.query("UPDATE employee SET role_id=? WHERE first_name= ?", [update.employeeUpdate, update.roleUpdate], (err, res) => {
        if (err) throw (err);
        console.table(res);

    })})

};

async function init() {
    await questions();
}

init();