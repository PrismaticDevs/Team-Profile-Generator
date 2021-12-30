// PrismaticDevelopmentStudios

class Employee {
    constructor(id, name, role, email) {
        this._id = id;
        this._name = name;
        this._role = role;
        this._email = email;
    }
    getName() {
        return this._name;
    }
    getId() {
        return this._id;
    }
    getEmail() {
        return this._email;
    }
    getRole() {
        return this._role = "Employee";
    }
}

class Manager extends Employee {
    constructor(id, name, role, email, officeNumber) {
        super(id, name, role, email);
        this._officeNumber = officeNumber;
    }
    getRole() {
        return this._role = 'Manager';
    }
}

class Engineer extends Employee {
    constructor(id, name, role, email, github) {
        super(id, name, role, email);
        this._github = github;
    }
    getRole() {
        return this._role = 'Engineer';
    }
    getGithub() {
        return this._github;
    }
}

class Intern extends Employee {
    constructor(id, name, role, email, school) {
        super(id, name, role, email);
        this._school = school;
    }
    getSchool() {
        return this._school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};