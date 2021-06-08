const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should return an object containing 'name' 'id' and 'email' property", () => {
    const obj = new Employee("Vinette", 2, "x@gmail.com");

    expect("name" in obj).toEqual(true);
    expect("id" in obj).toEqual(true);
    expect("email" in obj).toEqual(true);
  });
});
