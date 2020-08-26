const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

    // call parent constructor here:
    super(name, id, email);

    this.school = school; // school attended

}

 getSchool(){
    return this.school;
 }
// Overridden to return 'Intern'
    getRole(){
        return "Intern";
}   

}

module.exports = Intern;