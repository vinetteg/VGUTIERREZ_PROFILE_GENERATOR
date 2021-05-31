const inquirer = require("inquirer");
const fs = require("fs");

const engineer = [
  {
    type: "input",
    name: "engineer_name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "engineer_id",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "engineer_github",
    message: "What is the engineers Github handle?",
  },
  {
    type: "input",
    name: "engineer_email",
    message: "What is the engineer's email?",
  },
  {
    type: "list",
    name: "new_employee",
    message: "Please choose the next type of employee you would like to add:",
    choices: ["Engineer", "Intern", "No other employees"],
  },
];

const intern = [
  {
    type: "input",
    name: "intern_name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "intern_id",
    message: "What is the intern's ID number?",
  },
  {
    type: "input",
    name: "intern_github",
    message: "What is the intern's Github handle?",
  },
  {
    type: "input",
    name: "intern_email",
    message: "What is the intern's email?",
  },
  {
    type: "list",
    name: "new_employee1",
    message: "Please choose the next type of employee you would like to add:",
    choices: ["Engineer", "Intern", "No other employees"],
  },
];

inquirer
  .prompt([
    {
      type: "input",
      name: "manager_name",
      message: "Team manager: What is your name? ",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is your manager ID number?",
    },
    {
      type: "input",
      name: "manager_email",
      message: "What your email address?",
    },
    {
      type: "input",
      name: "manager_number",
      message: "What is your phone number?",
    },
    {
      type: "list",
      name: "new_employee",
      message: "Please choose the next type of employee you would like to add:",
      choices: ["Engineer", "Intern", "No other employees"],
    },
  ])
  .then((answers) => {
    if (answers.new_employee === "Intern") {
      inquirer.prompt(intern).then(function (internAnswers) {
        console.log(internAnswers);
      });
    } else if (answers.new_employee === "Engineer") {
      inquirer.prompt(engineer).then(function (engineerAnswers) {
        console.log(engineerAnswers);
      });
    } else if (answers.new_employee === "No other employees") {
      fs.writeFile("index.html", showPage(answers), (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
      );
    }
  });

const showPage = (answers) => {
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
