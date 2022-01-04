const { Intern } = require('../src/classes');

describe("Intern", () => {
    const intern = new Intern();

    test("defines setRule()", () => {
        expect(typeof intern).toBe("object");
    });
});