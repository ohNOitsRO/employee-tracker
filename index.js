const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const sequelize = require('./config/connection');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'DB_NAME',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
    
  );


  app.listen(PORT, () => {
    console.log(`Server running live on port ${PORT}`);

  });
  