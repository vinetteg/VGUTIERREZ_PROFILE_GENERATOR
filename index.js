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
    name: "name",
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
          const newManager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
          );
          employees.push(newManager);
          console.log(managerAnswers);
          addEmployee();
        });
      } else {
        this.quit();
      }
    });
}

async function addEmployee() {
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
          const newIntern = new Intern(
            internAnswers.name,
            internAnswers.id,
            internAnswers.email,
            internAnswers.school
          );

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
          const newEngineer = new Engineer(
            engineerAnswers.name,
            engineerAnswers.id,
            engineerAnswers.email,
            engineerAnswers.github
          );
          employees.push(newEngineer);
          console.log(engineerAnswers);
          addEmployee();
        });
      } else if (answers.new_employee === "No other employees") {
        showHtml();
        // console.log(showHtml());
      }
    });
}
let htmlPt2 = "";
function createCard() {
  var fullTeam = employees.length;
  var i = 0;

  employees.forEach((member) => {
    // console.log(member);
    const name = member.getName();
    const id = member.getId();
    const role = member.getRole();
    const email = member.getEmail();

    if (role === "Manager") {
      const officeNumber = member.getOfficeNumber();
      htmlPt2 =
        htmlPt2 +
        `    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <p class="card-text">Employee ID#${id}</p>
        <a href="#" class="card-link">${email} </a>
        <a href="#" class="card-text">Phone:${officeNumber} </a>
      </div>
    </div>`;
      // console.log(htmlPt2);
    } else if (role === "Intern") {
      const school = member.getSchool();
      htmlPt2 =
        htmlPt2 +
        `
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Employee ID#${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <p class="card-text">
            #${id} </p>
            <a href="#" class="card-link">#${email} </a>
            <a href="#" class="card-link">${school} </a>
          </p>
        </div>
      </div>`;
      // return htmlPt2;
    } else if (role === "Engineer") {
      const github = member.getGithub();
      htmlPt2 =
        htmlPt2 +
        `    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">#${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">#Engineer</h6>
        <p class="card-text">
          Employee ID#${id} </p>
          <a href="#" class="card-link">#${email} </a>
          <a href="#" class="card-link">#https://github.com/${github} </a>
        </p>
      </div>
    </div>`;
      // return htmlPt2;
    }
    // fs.appendFile("index.html", htmlPt2, function (err) {
    //   if (err) {
    //     return reject(err);
    //   }
    //   i++;
    //   if (i === fullTeam) {
    //     console.log("html created successfully!");
    //     startHtml();
    //   }
    // });
    // console.log(htmlPt2);
  });
  return htmlPt2;
}

async function showHtml() {
  const team = await createCard();
  // console.log(team);
  let html = `<!DOCTYPE html>
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
          ${team}
        </div>
      </div>
      </body>
      </html>`;
  // return html;
  fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

// function startHtml() {
//   const htmlPt3 = `
//   </body>
//   </html>`;

//   fs.appendFile("index.html", htmlPt3, function (err) {
//     if (err) {
//       return reject(err);
//     }
//   });
// }

addManager();
