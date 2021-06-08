const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const manager = [
  {
    type: "input",
    name: "manager_name",
    message: "Team manager: What is your name? ",
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What your email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your phone number?",
  },
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers Github handle?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID number?",
  },
  {
    ype: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

function addManager() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "choice",
        message:
          "Ready to create a profile page for your team? Please add your information first.",
      },
    ])
    .then((val) => {
      if (val.choice) {
        inquirer.prompt(manager).then(function (managerAnswers) {
          console.log(managerAnswers);
          addEmployee();
        });
      } else {
        this.quit();
      }
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "new_employee",
        message:
          "Please choose the next type of employee you would like to add:",
        choices: ["Engineer", "Intern", "No other employees"],
      },
    ])
    .then((answers) => {
      if (answers.new_employee === "Intern") {
        inquirer.prompt(intern).then(function (internAnswers) {
          const newIntern = new Intern();
          // const employee1 = new Intern(name, id,
          //   internAnswers.intern_name,
          //   1,
          //   "janedoe@gmail.com"
          // );
          employees.push(newIntern);
          console.log(internAnswers);
          addEmployee();
        });
      } else if (answers.new_employee === "Engineer") {
        inquirer.prompt(engineer).then(function (engineerAnswers) {
          employees.push(employee1);
          console.log(engineerAnswers);
          addEmployee();
        });
      } else if (answers.new_employee === "No other employees") {
        fs.writeFile("index.html", showPage(employees), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      }
    });
}

const showPage = (employees) => {
  console.log(employees);
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <title>Employee Page</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">My Team</h1>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${answers.manager_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">#${answers.manager_id}</p>
        <a href="#" class="card-link">${answers.manager_email} </a>
        <a href="#" class="card-text">Phone:${answers.manager_number} </a>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">#${answers.intern_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">#${answers.intern_name}</h6>
        <p class="card-text">
          #${answers.intern_id} </p>
          <a href="#" class="card-link">#${answers.intern_email} </a>
          <a href="#" class="card-link">https://github.com/${answers.intern_github} </a>
        </p>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">#${answers.engineer_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">#${answers.engineer_name}</h6>
        <p class="card-text">
          #${answers.engineer_id} /p>
          <a href="#" class="card-link">#${answers.engineer_email} </a>
          <a href="#" class="card-link">#https://github.com/${answers.engineer_github} </a>
        </p>
      </div>
    </div>

  </body>
</html>
`;

  return html;
};
addManager();
