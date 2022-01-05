const { Engineer } = require('../src/classes');

describe("Engineer", () => {
    const engineer = new Engineer();

    test("should check if engineer is of type object", () => {
        expect(typeof engineer).toBe("object");
    });
});