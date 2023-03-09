const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const server = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id");



}


function allRoles() {
  connection.query("SELECT role.id, role.title, role.salary, role.department_id, department.id, department.name FROM role LEFT JOIN department on role.department_id = department.id");


}


function allEmployees() {



}

function addDept() {



}


function addRole() {



}

function addEmp() {


}

function updateRole() {



}