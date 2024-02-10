// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(James, JA321, "Jamestheintern@vscode.com");
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return Intern;
  }
}

Intern.getSchool();
Intern.getRole();

module.exports = Intern;
