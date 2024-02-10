// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(David, DA132, "Davidthemanager@vscode.com");
    this.officeNumber = officeNumber;
  }
  getRole() {
    return Manager;
  }
}

Manager.getRole();

module.exports = Manager;
