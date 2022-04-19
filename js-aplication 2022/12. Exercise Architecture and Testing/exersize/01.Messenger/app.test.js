const { chromium } = require("playwright");
const { assert, expect } = require("chai");

let browser, page;

describe("End to End Tests", () => {
  before(async () => {
    browser = await chromium.launch();
    // browser = await chromium.launch({ headless: false, slowMo: 1000 });
  });
  after(async () => {
    browser = await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  describe("send message", () => {
    let mockBaseContent = {
      abc: { _id: "abc", author: "gosho", content: "lalalallal" },
      1: { _id: "1", author: "gosasdho", content: "lalalalasdlal" },
      2: { _id: "2", author: "12", content: "21" },
    };
    let fakeRes = {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockBaseContent[2]),
    };

    it("should call server with new message", async () => {
      await page.route("**/jsonstore/messenger", (route) => route.fulfill(fakeRes));
      await page.goto("http://127.0.0.1:5500/index.html");
      await page.fill("#author", "12");
      await page.fill("#content", "21");

      let [res] = await Promise.all([
        page.waitForResponse("**/jsonstore/messenger"),
        page.click("#submit"),
      ]);

      res = await res.json();
      assert.deepEqual(res, mockBaseContent[2]);
    });
  });

  describe("load Message", () => {
    let testData = {
      abc: { _id: "abc", author: "gosho", content: "lalalallal" },
      1: { _id: "1", author: "gosasdho", content: "lalalalasdlal" },
    };
    let fakeRes = {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    };

    it("should call server", async () => {
      await page.route("**/jsonstore/messenger", (route) => route.fulfill(fakeRes));
      await page.goto("http://127.0.0.1:5500/index.html");

      let [res] = await Promise.all([
        page.waitForResponse("**/jsonstore/messenger"),
        page.click("#refresh"),
      ]);

      res = await res.json();
      assert.deepEqual(res, testData);
    });
  });
});