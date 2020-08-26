

// we want interns to have  
//three inherited properties and three inherited methods
//with one new property, one new method and one overriden method:
//officeNumber
//getOfficeNumber()
//getRole()   // Overridden to return 'Manager'


//require the class file
const Manager = require('../lib/Manager');

//write test for these three 
test("Able to get office number", () => {
    const test = "Office";
    const employee = new Manager("Doug", 1, "email@email.com", test);
    expect(employee.officeNumber).toBe(test);
  });
  
  test("That getRole() returns Manager", () => {
    const test = "Manager";
    const employee = new Manager("Doug", 1, "email@email.com", test);
    expect(employee.getRole()).toBe(test);
  });

  test("Able to get Manager's office number from getOfficeNumber()", () => {
    const test = "Office";
    const employee = new Manager("Doug", 1, "email@email.com", test);
    expect(employee.getOfficeNumber()).toBe(test);
  });