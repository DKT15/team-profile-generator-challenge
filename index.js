const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// This is the prmopt user function that which is calling inquirer.prompt. Below it is various questions that will be in the file.
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's name",
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the manager's employee id",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "Please enter the manager's office number",
    },
    {
      type: "list",
      name: "employeeOptions",
      message: "Would you like to add another employee to the team?",
      choices: [
        "Add an Engineer",
        "Add an Intern",
        "I have finished building my team.",
      ],
    },
  ]);

if (employeeOptions === "Add an Engineer") {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer's name",
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the engineer's employee id",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the engineer's email",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the engineer's github username",
    },
  ]);
} else if (employeeOptions === "Add an Intern") {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the intern's name",
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the intern's employee id",
    },
    {
      ype: "input",
      name: "email",
      message: "Please enter the intern's email",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school name",
    },
  ]);
} else if (employeeOptions === "I have finished building my team.") {
  const employeeHTML = this.generateteam(team);
  fs.writeFile(outputPath),
    employeeHTML,
    (err) => {
      if (err) throw new Error(err);
      console.log("Page created! Check out ./html/index.html");
    };
}

// Prompt user function is called here. When it is called, it passes in the data and the generateREADME.md file is being created. The createMarkdownFile is being run with the data inside of it.
promptUser();
render([Manager, Engineer, Intern]);

//   .then((data) => writeFileAsync("generateindex.html", createHTMLFile(data)))
//   .then(
//     () =>
//       console.log(
//         "You have added your data successfully to the README.md file."
//       ) //If it passes then the success message will be displayed. If not then the error message will be.
//   )
//   .catch((err) => console.log(err));
