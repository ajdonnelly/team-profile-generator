// // create the about section
// const generateAbout = aboutText => {
//     if (!aboutText) {
//       return '';
//     }
  
//     return `
//       <section class="my-3" id="about">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//         <p>${aboutText}</p>
//       </section>
//     `;
//   };
  
  // create the projects section
  const createTeam = theTeam => {

    // create the manager html
    const generateManager = manager => {

      return `
    <div class="pure-u-1-3">
    
      <div class="employee">
        <div>
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
      

        <div class="stats">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
      `;
  };

  // create the html for engineers
  const generateEngineer = engineer => {
    return `
  <div class="pure-u-1-3">
    <div class="employee">
      <div>
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
    

      <div class="stats">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
  </div>
    `;
};

  // create the html for interns
    const generateIntern = intern => {
        return `
  <div class="pure-u-1-3">

    <div class="employee">
      <div>
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>

      <div class="stats">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
        `;
    };

    //create an empty array to push to called output
    const output = [];
    //pulls engineer out of team and creates a new array to push to output array. 
    output.push(theTeam.filter(member => member.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    output.push(theTeam.filter(member => member.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    output.push(theTeam.filter(member => member.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
//then joins the various teammember data. 
    return output.join("");

}

  // export function to generate entire page
  module.exports = theTeam => {
    // destructure page data 
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team of Teams</title>
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    
    </head>
    <body>
      <div class="header">
        <h1>Your Team</h1>
      </div>

    
      <div class="members pure-g">
             ${createTeam(theTeam)}
      </div>
        
</body>
</html>
    `;
  };
  