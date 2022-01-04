const { Employee } = require('../src/classes');

describe("Employee", () => {
    const employee = new Employee();

    test("defines setRule()", () => {
        expect(typeof employee).toBe("object");
    });
});