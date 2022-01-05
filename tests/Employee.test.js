const { Employee } = require('../src/classes');

describe("Employee", () => {
    const employee = new Employee();

    test("should check if employee is of type object", () => {
        expect(typeof employee).toBe("object");
    });
});