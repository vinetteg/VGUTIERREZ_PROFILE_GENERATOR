const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should return an object containing 'officeNumber'", () => {
    const obj = new Manager(1234567);

    expect("officeNumber" in obj).toBe(true);
  });
});
