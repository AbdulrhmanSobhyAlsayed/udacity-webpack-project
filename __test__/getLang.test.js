import { getLang } from "../src/client/js/formHandler";

describe("Testing get lang", () => {
  test("enter valid data", () => {
    const input = "محمد";
    getLang(input).then((res) => {
      expect(output.text).toMatch("Arabic");
    });
  });
  test("enter invalid data", () => {
    const input = null;

    getLang(input).catch((err) => {
      expect(e).toBeDefined();
    });
  });
});
