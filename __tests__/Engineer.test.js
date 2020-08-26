// we want engineers to have  
//three inherited properties and three inherited methods
//with one new property, one new method and one overriden method:
// github
// getGithub()
// getRole()   // Overridden to return 'Engineer'

//require the class file
const Engineer = require('../lib/Engineer');

//write tests for these three
test("Able to get GitHUb Account", () => {
    const test = "GitHub";
    const engineer = new Engineer("Doug", 1, "email@email.com", test);
    expect(engineer.github).toBe(test);
  });
  
  test("That getRole() returns Engineer", () => {
    const test = "Engineer";
    const engineer = new Engineer("Doug", 1, "email@email.com", test);
    expect(engineer.getRole()).toBe(test);
  });

  test("Able to get GitHub username from getGithub()", () => {
    const test = "GitHubUsername";
    const engineer = new Engineer("Doug", 1, "email@email.com", test);
    expect(engineer.getGithub()).toBe(test);
  });

