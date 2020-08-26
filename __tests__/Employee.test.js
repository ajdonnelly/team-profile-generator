

const Employee = require("../lib/Employee");

test("Able to create Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
  
  test("Able to get Name", () => {
      const name = "George";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("Able to get ID", () => {
    const test = "ID";
    const employee = new Employee("Doug", test);
    expect(employee.id).toBe(test);
  });

  test("Able to get Email", () => {
    const test = "email@email.com";
    const employee = new Employee("Doug", 1, test);
    expect(employee.email).toBe(test);
  });

  test("Able to get name from getName", () => {
    const name = "George";
  const employee = new Employee(name);
  expect(employee.getName()).toBe(name);
});

test("Able to get ID from getID()", () => {
    const test = "ID";
    const employee = new Employee("Doug", test);
    expect(employee.getId()).toBe(test);
  });

  test("Able to get email from getEmail()", () => {
    const test = "email@email.com";
    const employee = new Employee("Doug", 1, test);
    expect(employee.getEmail()).toBe(test);
  });

  test("That getRole() returns Employee", () => {
    const test = "Employee";
    const engineer = new Employee("Doug", 1, "email@email.com", test);
    expect(engineer.getRole()).toBe(test);
  });

