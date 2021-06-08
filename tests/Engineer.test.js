const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should return an object containing 'github", () => {
    const obj = new Engineer("vinetteg");

    expect("github" in obj).toBe(true);
  });
});
