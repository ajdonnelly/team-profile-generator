// WHEN I start the application
//this is what runs when the user hits "node index.js"


const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require("path");
const fs = require("fs");

const generatePage = require('./src/page-template');
//creates dir location of new file
const newDir = path.resolve(process.cwd(), "team-profile")
//joins the absolute path resolved above with the new filename to make a path
//this new path is saved as outputPath
const htmlFile = path.join(newDir, "team-profile.html");

//empty arrays to push to
const teamArray = [];
const idArray = [];

// THEN I am prompted to enter the team manager’s name, employee id, email address, and office number
function  runApp() {

function newManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please provide the name of the team manager (Required)",
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log('Please provide the name of the team manager.');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "Please provide the team manager's employee id",
        validate: ID => {
          const test = ID.match(
            /^[1-9]\d*$/
          );
          if (test) {
            return true;
          } else {
          return "Please enter a number above 0";
        }
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please provide the team manager's email",
        validate: email => {
          const test = email.match(
            /\S+@\S+\.\S+/
          );
          if (test) {
            return true;
          } else {
          return "Please enter a valid email address.";
          }
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please provide the team manager's office number",
        validate: test => {
          const pass = test.match(
            /^\d*$/
          );
          if (pass) {
            return true;
          } else {
            return "Please enter a number above zero";  
          }
          
        }
      }
    ]).then(m => {
      const manager = new Manager(m.managerName, m.managerId, m.managerEmail, m.managerOfficeNumber);
      teamArray.push(manager);
      idArray.push(m.managerId);
      assembleTeam();
    });
  }

// WHEN I enter the team manager’s name, employee id, email address, and office number
// THEN I am presented with a menu with the option to add an engineer, an intern, or finish building my team


function assembleTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "pickTeam",
        message: "Please select the type of team member you would like to add",
        choices: [
          "Engineer",
          "Intern",
          "I want to finish building my team as it is"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.pickTeam) {
        case "Engineer":
          newEngineer();
          break;
        case "Intern":
          newIntern();
          break;
        default:
          gatherTeam();
      }
    });
  }

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, id, email, and GitHub username and I am taken back to the menu
  
function newEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the name of your team engineer",
        validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please provide the name of the team engineer.');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter your team engineer's employee id?",
        validate: ID => {
            //test the user's answer and ensure with regex 
          const test = ID.match(
            /^\d*$/
          );
          if (test) {
            if (idArray.includes(ID)) {
              return "ID taken. Please enter a new number above 0.";
            } else {
              return true;
            }
          } 
          return "Please enter a number above zero.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please provide your team engineer's email address",
        validate: test => {
          const correct = test.match(
            /\S+@\S+\.\S+/
          );
          if (correct) {
            return true;
          } else {
             return "Please enter a valid email address."; 
          }
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please provide your engineer's GitHub username",
        validate: test => {
          if (test) {
            return true;
          }else {
              return "Pretty Please enter your engineer's GitHub username.";
          }
          
        }
      }
    ]).then(e=> {
      const engineer = new Engineer(e.engineerName, e.engineerId, e.engineerEmail, e.engineerGithub);
      teamArray.push(engineer);
      idArray.push(e.engineerId);
      assembleTeam();
    });
  }

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, id, email, and school and I am taken back to the menu
  
function newIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Please enter the name of your team intern",
        validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please provide the name of the team intern.');
              return false;
            }
          }
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter your team intern's employee id?",
        validate: ID => {
            //test the user's answer and ensure with regex 
          const test = ID.match(
            /^\d*$/
          );
          if (test) {
            if (idArray.includes(ID)) {
              return "ID taken. Please enter a new number above 0.";
            } else {
              return true;
            }

          } else {
          return "Please enter a number above zero.";
          }
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "Please provide your team intern's email address",
        validate: test => {
          const correct = test.match(
            /\S+@\S+\.\S+/
          );
          if (correct) {
            return true;
          } else {
             return "Please enter a valid email address."; 
          }
        }
      },
      {
        type: "input",
        name: "engineerSchool",
        message: "Please provide your team intern's school name",
        validate: test => {
          if (test) {
            return true;
          }else {
              return "Pretty Please enter your team intern's school name.";
          }
          
        }
      }
    ]).then(i=> {
      const intern = new Intern(i.engineerName, i.engineerId, i.engineerEmail, i.engineerSchool);
      teamArray.push(intern);
      idArray.push(i.internId);
      assembleTeam();
    });
    }

// WHEN I decide to finish building my team
// THEN I exit the application and the HTML is generated
//not sure about this code-may have to refactor
    function gatherTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(newDir)) {
          fs.mkdirSync(newDir)
        }
        //fs.writeFileSync( file, data, options )
        //takes the path defined above takes data from the teamArray and 
        //passes it through the page-template
        fs.writeFileSync(htmlFile, generatePage(teamArray), "utf-8");
      }
    
  newManager();

}

runApp();