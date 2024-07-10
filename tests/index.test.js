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

  if (sum !== 6) throw new Error("Expected summing array to equal 6");
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * value;
  });

  if (result[0] !== 1)
    throw new Error(`Expected to have 1, but found ${result[0]}`);

  if (result[1] !== 4)
    throw new Error(`Expected to have 1, but found ${result[0]}`);

  if (result[2] !== 9)
    throw new Error(`Expected to have 1, but found ${result[0]}`);
});
