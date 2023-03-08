const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const sequelize = require('./config/connection');

// Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'DB_NAME',
//       // MySQL username,
//       user: 'root',
//       // TODO: Add MySQL password here
//       password: '',
//       database: 'employees_db'
//     },
//     console.log(`Connected to the employees_db database.`)
    
//   );


  const questions = () => {
    inquirer
      .prompt(
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
          ],
        },
      )}








sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Listening...'));
});