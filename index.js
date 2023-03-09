const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
    
  );


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



function allDepts() {




}


function allRoles() {



}


function allEmps() {



}

function addDept() {



}


function addRole() {



}

function addEmp() {


}

function updateRole() {


  
}






sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Listening...'));
});