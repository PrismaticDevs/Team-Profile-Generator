const { Intern } = require('../src/classes');

describe("Intern", () => {
    const intern = new Intern();

    test("should check if intern is of type object", () => {
        expect(typeof intern).toBe("object");
    });
});