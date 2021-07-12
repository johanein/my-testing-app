import isAnagram from "./index";

test("isAnagram a function", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'cinema' is a Anagram of 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});
test("'Hello' is a Anagram of 'Aloha'", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
