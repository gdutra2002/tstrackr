// begin with employee construct, add simular models for
// departments, roles, for the three tables.

// Uses the Inquirer packageLinks to an external site..

// Uses the MySQL2 packageLinks to an external site. to connect to a MySQL database.

// Uses the console.table packageLinks to an external site. to print MySQL rows to the console.


const { prompt } = require("inquirer");


class Employee { constructor( id, firstname, lastname, 
      jobtitle, department, salerie, manager){ 
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;   
      this.jobtitle = jobtitle; 
      this.department = department;
      this.salerie = salerie;
      this.manager = manager;
      }
}


promptEmployee(); { 
      return inquirer.prompt([ { 
            type: "input", id: "id", 
            message: "Enter employee's ID:", }, {
            type: "input", firstname: "firstname", 
            message: "Enter employee's firstname:", }, { 
            type: "input", lastname: "lastname", 
            message: "Enter employee's lastname:", }, {
            type: "input", jobtitle: "jobtitle", 
            message: "Enter employee's jobtitle:", }, { 
            type: "input", department: "department",
            message: "Enter employee's department:", }, {
            type: "input", salerie: "salerie", 
            message: "Enter employee's salerie:", }, {
            type: "input", manager: "manager",
            message: "Enter employee's manager:",}  
      ]); } 


      console.log("Welcome to the tstrackr!");

      promptEmployee().then((answers) => { 
            const employee = new Employee(answers.id, answers.firstname, 
                  answers.lastname, answers.jobtitle, answers.department, 
                  answers.salerie, answers.manager); 
            const html = generateHTML(employee); 
            fs.writeFile("tstrackr.html", html, (err) => { 
                  if (err) { console.error("Error writing to team.html:", err);
             } else {
                   console.log("tstrackr.html file generated successfully!");
                   } });
                   }); 

