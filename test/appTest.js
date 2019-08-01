// const assert = require('assert')
const { assert } = require("chai");

const app = require("../app");
// const { sayHello, addNumbers } = require("../app");

// Results
let sayHelloRes = app.sayHello(),
  addNumbersRes = app.addNumbers(3, 7);

describe("App", () => {
  describe("sayHello fn test", () => {
    it("sayHello fn should return hello", () => {
      // let result = app.sayHello();
      assert.equal(sayHelloRes, "hello", "Return message not returned 'hello'");
    });

    it("sayHello fn should return a string type", () => {
      // let result = app.sayHello();
      assert.typeOf(sayHelloRes, "string", "Return isn't a string");
    });
  });

  describe("addNumbers fn test", () => {
    it("addNumbers should return addition between 2 numbers", () => {
      let n1 = 3;
      let n2 = 7;
      // let result = app.addNumbers(n1, n2);
      assert.equal(addNumbersRes, n1 + n2);
    });

    it("addNumbers should be above 5", () => {
      // let result = app.addNumbers(5, 7);
      assert.isAbove(addNumbersRes, 5);
    });

    it("addNumbers fn should return a number type", () => {
      // let result = app.addNumbers(81, 1);
      assert.typeOf(addNumbersRes, "number");
    });
  });
});
