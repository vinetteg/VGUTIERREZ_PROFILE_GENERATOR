const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should return an object containing 'school' property", () => {
    const obj = new Intern("University of Washington");

    expect("school" in obj).toEqual(true);
  });
});
