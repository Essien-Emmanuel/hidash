const assert = require("assert");
const colors = require("colors");

const { forEach, map } = require("../src/index");

function test(desc, fn) {
  console.log(`----${desc}`);
  try {
    fn();
  } catch (error) {
    console.log(colors.red(error.message));
  }
}

test("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum the array");
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * value;
  });

  assert.deepStrictEqual(result, [1, 4, 9]);
});
