import { getAnalysis } from "../src/client/js/formHandler";

describe("Testing get analysis", () => {
  test("enter valid data", () => {
    const input = "hello";
    getAnalysis(input).then((res) => {
      expect(output.text).toMatch("confidence: 100 - score tag: NONE");
    });
  });
  test("enter invalid data", () => {
    const input = null;

    getAnalysis(input).catch((err) => {
      expect(e).toBeDefined();
    });
  });
});
