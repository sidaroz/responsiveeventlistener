/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe("head", () => {
    test("it has a title", () => {
      const head = document.querySelector("head");
      expect(head).toBeTruthy();
      expect(head.textContent).toContain("Responsive Website");
    });
  });

  describe("body", () => {
    test("header exists", () => {
      expect(document.querySelector("header")).toBeTruthy();
    });
    test("it has a header title", () => {
      let header = document.querySelector("header");
      expect(header.textContent).toContain("Almonds");
    });
    test("it has a second title", () => {
      let secondTitle = document.querySelector("#header2");
      expect(secondTitle.textContent).toContain("Do you like Nuts");
    });
  });
});
