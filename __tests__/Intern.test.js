
// we want interns to have  
//three inherited properties and three inherited methods
//with one new property, one new method and one overriden method:
//school
//getSchool()
//getRole()   // Overridden to return 'Intern'

//require the class file
const Intern = require('../lib/Intern');


//write test for these three 

test("Able to get school", () => {
    const test = "School";
    const engineer = new Intern("Doug", 1, "email@email.com", test);
    expect(engineer.school).toBe(test);
  });
  
  test("That getRole() returns Intern", () => {
    const test = "Intern";
    const engineer = new Intern("Doug", 1, "email@email.com", test);
    expect(engineer.getRole()).toBe(test);
  });

  test("Able to get school from getSchool()", () => {
    const test = "School";
    const engineer = new Intern("Doug", 1, "email@email.com", test);
    expect(engineer.getSchool()).toBe(test);
  });