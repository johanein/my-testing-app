import functions from "./functions";

const initDatabase = () => console.log("initDatabase");

const closeDatabase = () => console.log("closeDatabase");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const nameCheck = () => console.log("checking name ...");

describe("Check names", () => {
  beforeEach(() => nameCheck());

  test("User is Albert", () => {
    const name = "albert";
    expect(name).toBe("albert");
  });
  test("User is Lify", () => {
    const name = "lify";
    expect(name).toBe("lify");
  });
});

test("add 2 + 2 equal to 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("add 2 + 2 is not equal to 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// testing falsy values

test("testing to be null", () => {
  expect(functions.isnull()).toBeNull();
});
test("testing to be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
test("user should be albert yohannan object", () => {
  expect(functions.createUser()).toEqual({
    name: "albert",
    lastname: "yohannan",
  });
});

// simple testing with logic

test("should be less than 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("should not match I", () => {
  expect("test").not.toMatch(/I/);
});

// Arrays
test("Array should should contain Admin", () => {
  const users = ["developer", "tester", "Admin"];
  expect(users).toContain("Admin");
});

// promise fetch calls
// test("name in data should match Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUsers().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async fetch calls

// test("name in data should match Leanne Graham asynchronously", async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUsers();
//   expect(data.name).toEqual("Leanne Graham");
// });

// reverse string

test("reverseString function should exist", () => {
  expect(functions.reverseString).toBeDefined();
});

test("string should reverse", () => {
  expect(functions.reverseString("hello")).toBe("olleh");
});
