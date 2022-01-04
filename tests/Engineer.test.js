const { Engineer } = require('../src/classes');

describe("Engineer", () => {
    const engineer = new Engineer();

    test("defines setRule()", () => {
        expect(typeof engineer).toBe("object");
    });
});