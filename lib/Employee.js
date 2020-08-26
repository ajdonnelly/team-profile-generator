
// The first class is an Employee parent class with the following properties 

// * `name`
// * `id`
// * `email`

//and the following methods:

// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`   // Returns 'Employee'

// The Employee object will be like an umbrella class, 
// as the Engineer, Intern and Manager will share and pull from many of the 
//properties of Employee-will they share the methods? 
//Employee doesn't need a test because it is only drawn from, right? 

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
              return this.name;
    }

    getId() {
            return this.id;
    }
    
    getEmail(){
            return this.email;
    }

    // Returns 'Employee'
    getRole(){
            return "Employee";

    }

}

  module.exports = Employee