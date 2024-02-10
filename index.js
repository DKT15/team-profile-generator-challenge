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
      name: "nameOfRepo",
      message: "What is the name of your Repo?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a description for your project.",
    },
    {
      type: "test",
      name: "tableOfContents",
      message: "Add your relevant links to navigate around the README",
    },
    {
      type: "input",
      name: "installation",
      message:
        "If applicable, describe the steps required to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples of your project in use ",
    },
    {
      type: "list",
      name: "license",
      message: "choose a license for your project",
      choices: [
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "No license",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "If applicable, provide guidelines on how other developers can contribute to your project.",
    },
    {
      type: "input",
      name: "tests",
      message:
        "If applicable, provide any tests written for your application and provide examples on how to run them.",
    },
    {
      type: "input",
      name: "questions",
      message:
        "please add your GitHub username and email address to be contacted if anyone has any questions.",
    },
  ]);

//This function takes in the data from above and then returns it.
const createHTMLFile = (data) => {
  console.log(data);
  const {
    nameOfRepo,
    description,
    tableOfContents,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
  } = data; //object destructuring

  return `## ${nameOfRepo} 
## ${description}
## ${tableOfContents}
## ${installation}
## ${usage}
## ${license}
## ${contributing}
## ${tests}
## ${questions}
  `;
};

// Prompt user function is called here. When it is called, it passes in the data and the generateREADME.md file is being created. The createMarkdownFile is being run with the data inside of it.
promptUser()
  .then((data) => writeFileAsync("generateindex.html", createHTMLFile(data)))
  .then(
    () =>
      console.log(
        "You have added your data successfully to the README.md file."
      ) //If it passes then the success message will be displayed. If not then the error message will be.
  )
  .catch((err) => console.log(err));
