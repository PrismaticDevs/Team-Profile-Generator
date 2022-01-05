const { Intern } = require('../src/classes');

describe("creates new intern", () => {
    const intern = new Intern();

    test("should check if intern is of type object", () => {
        expect(typeof intern).toBe("object");
    });
});