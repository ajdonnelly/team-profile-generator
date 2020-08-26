// In addition to `Employee`'s properties and methods, 
//`Engineer` will also have:

//1 property of its own: 
// * `github`  // GitHub username

//and 2 methods of its own

// * `getGithub()`

// * `getRole()`   // Overridden to return 'Engineer'


const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

    // call parent constructor here:
    super(name, id, email);

    this.github = github;  // GitHub username
}

getGithub() {
    return this.github;
}

// Overridden to return 'Engineer'
getRole(){
    return "Engineer";
}   
}

module.exports = Engineer