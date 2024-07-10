const assert = require("assert");

const { forEach, map } = require("../src/index");

it("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 7, "Expected forEach to sum the array");
});

it("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * value;
  });

  assert.deepStrictEqual(result, [1, 4, 9]);
});
