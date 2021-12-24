let index = 0;
class Employee {
    constructor(id, name, title, email, github) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.email = email;
        this.github = 'https://github.com/' + github;
    }
    getName() {

    }
}

let WebDesigner = new Employee(1, 'Matt', 'Web Designer', 'matthewbrignola@ymail.com', 'PrismaticDevelopmentStudios');

let DatabaseEngineer = new Employee(2, 'Tim', 'QA Egineer', 'tdog@gmail.com', 'TDog')
console.log(WebDesigner, DatabaseEngineer);