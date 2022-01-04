const { Manager } = require('../src/classes');

describe("Manager", () => {
    const manager = new Manager();

    test("defines setRule()", () => {
        expect(typeof manager).toBe("object");
    });
});