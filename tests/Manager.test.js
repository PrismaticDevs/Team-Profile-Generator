const { Manager } = require('../src/classes');

describe("Manager creates new manager", () => {
    const manager = new Manager();

    test("should check if manager is of type object", () => {
        expect(typeof manager).toBe("object");
    });
});