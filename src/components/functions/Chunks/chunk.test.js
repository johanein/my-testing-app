import chunkArray from "./chunk";

test("chunkArray function should exist", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk an array of 10 values to a length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const response = chunkArray(numbers, len);
  expect(response).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
