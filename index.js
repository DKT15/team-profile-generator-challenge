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
  inquirer
    .prompt([
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
        // The code will skip certain parts of the code, depnding on how the user answers the questions below.
        type: "list",
        name: "employeeOptions",
        message: "Would you like to add another employee to the team?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "I have finished building my team.",
        ],
      },
    ])
    // Here I am pushing the manager's data that the user has entered to the HTML file.
    .then((templateData) => {
      const newManager = new Manager(
        templateData.name,
        templateData.id,
        templateData.email,
        templateData.officeNumber
      );
      this.manager.push(newManager);
    });

if (employeeOptions === "Add an Engineer") {
  inquirer
    .prompt([
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
    ])
    // Here I am pushing the Engineer's data that the user has entered to the HTML file.
    .then((templateData) => {
      const newEngineer = new Engineer(
        templateData.name,
        templateData.id,
        templateData.email,
        templateData.github
      );
      this.engineer.push(newEngineer);
    });
} else if (employeeOptions === "Add an Intern") {
  inquirer
    .prompt([
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
        type: "input",
        name: "email",
        message: "Please enter the intern's email",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school name",
      },
    ])
    // Here I am pushing the Intern's data that the user has entered to the HTML file.
    .then((templateData) => {
      const newIntern = new Intern(
        templateData.name,
        templateData.id,
        templateData.email,
        templateData.school
      );
      this.intern.push(newIntern);
    });
  // If the user selects that they have finished building their team after the manager has been created. This code will trigger and will write and generate the HTML file and will also catch any errors in the process.
} else if (employeeOptions === "I have finished building my team.") {
  const employeeHTML = this.generateteam(team);
  fs.writeFile(outputPath),
    employeeHTML,
    (err) => {
      if (err) throw new Error(err);

      console.log("Page created! Check out ./output/team.html");
    };
}

// Here I'm calling the promptUser method and rendering the Manager, Engineer and Intern.
promptUser();
render([Manager, Engineer, Intern]);
