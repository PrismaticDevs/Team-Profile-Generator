const { Engineer } = require('../src/classes');

describe("Creates new engineer", () => {
    const engineer = new Engineer();

    test("should check if engineer is of type object", () => {
        expect(typeof engineer).toBe("object");
    });
});