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
  const generateTeam = theTeam => {

    // create the manager html
    const generateManager = manager => {

      return `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${manager.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
          </ul>
      </div>
  </div>
      `;
  };

  // create the html for engineers
  const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

  // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    //create an empty array to push to called output
    const output = [];
    //pulls engineer out of team and creates a new array to push to output array. 
    output.push(theTeam
        .filter(member => member.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    output.push(theTeam
        .filter(member => member.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    output.push(theTeam
        .filter(member => member.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
//then joins the various teammember data. 
    return output.join("");

}

  // export function to generate entire page
  module.exports = theTeam => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team of Teams</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateProjects(projects)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };
  