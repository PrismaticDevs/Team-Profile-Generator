const { Employee } = require('../src/classes');

describe("Creates new  employee", () => {
    const employee = new Employee();

    test("should check if employee is of type object", () => {
        expect(typeof employee).toBe("object");
    });
});