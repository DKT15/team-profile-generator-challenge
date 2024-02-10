// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super(Jill, JD123, "Jilltheengineer@vscode.com");
    this.github = github;
  }
  getGithub() {}
  getRole() {
    return Engineer;
  }
}

Engineer.getGithub();
Engineer.getRole();

module.exports = Engineer;
