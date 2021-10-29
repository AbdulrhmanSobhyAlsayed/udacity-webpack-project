import { isEnglish } from "../src/client/js/nameChecker";

describe("Testing is input number or not", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("enter arabic", () => {
    // Define the input for the function, if any, in the form of variables/array
    const input = "محمد";
    const output = isEnglish(input);
    expect(output).toEqual(false);
  });
  test("enter english", () => {
    // Define the input for the function, if any, in the form of variables/array
    const input = "test";
    const output = isEnglish(input);
    expect(output).toEqual(true);
  });
});
