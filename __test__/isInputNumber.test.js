import { isInputNumber } from "../src/client/js/nameChecker";

// describe("Testing is input number or not", () => {
// The test() function has two arguments - a string description, and an actual test as a callback function.
test("enter number", () => {
  // Define the input for the function, if any, in the form of variables/array
  const input = "1234";
  const output = isInputNumber(input);
  expect(output).toEqual(true);
});
test("enter letters", () => {
  // Define the input for the function, if any, in the form of variables/array
  const input = "test";
  const output = isInputNumber(input);
  expect(output).toEqual(false);
});
// });
