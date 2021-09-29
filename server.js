const inquirer = require('inquier');
const table = require('console.table');
const database = require('./database/connection');

function initQuestions() {
    prompt([
        {
        type: 'list',
        message: 'Please choose an option.',
        name: 'choice',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add department',
            'add role',
            'add employee',
            'stop'
        ]
        }
    ])

    .then((response) => {

        if (response.choice === "view all departments") {
            viewDepartments();
        }

         else if (response.choice === "view all roles") {
            viewRoles();
        }

         else if (response.choice === "view all employees") {
            viewEmployees();
        }
        
        else if (response.choice === "add department") {
            addDepartment();
        }
         
        else if (response.choice === "add role") {
            addRole();
        }
        
        else if (response.choice === "add employee") {
            addEmployee();
        }
        
        else if (response.choice === "stop") {
            db.end();
        }
    });
};

function viewDepartments() {
    database.query('SELECT * FROM departments', function (err, res) {
        if (err) throw err;
        console.table(res);
        initQuestions();
    });
};

function viewRoles() {
    database.query('SELECT * FROM roles', function (err, res) {
        if (err) throw err;
        console.table(res);
        initQuestions();
    });
};

function viewEmployees() {
    database.query('SELECT * FROM employees', function (err, res) {
        if (err) throw err;
        console.table(res);
        initQuestions();
    });
};

function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'newD',
            message: 'Enter new department'
        }
    ])
    .then(function (entry) {
        database.query('INSERT INTO department SET ?', [entry], function (err) {
            if (err) throw err;
            initQuestions();
        });
    });
}

initQuestions();




