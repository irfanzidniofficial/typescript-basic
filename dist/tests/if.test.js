"use strict";
describe("If Statement", () => {
    it("should support in typescript", () => {
        const examValue = 80;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Bad");
        }
        else {
            console.info("Try Again");
        }
    });
    it("should support ternary operator", () => {
        const value = 80;
        const say = value >= 75 ? "Congratulations" : "Try Again";
        console.info(say);
    });
    it("should support switch statement", () => {
        function sayHello(name) {
            switch (name) {
                case "Irfan":
                    return "Hi Irfan";
                case "Zidni":
                    return "Hi Zidni";
                default:
                    return "Hello";
            }
        }
        console.info(sayHello("Irfan"));
        console.info(sayHello("Z"));
    });
});
