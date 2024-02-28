"use strict";
describe("Function", function () {
    it("should support in typescript", () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Irfan")).toBe("Hello Irfan");
        console.info(sayHello("Budi"));
        function printHello(name) {
            //   return print(name);
            return console.info(`Hello ${name}`);
        }
        printHello("zidni");
    });
    it("should support default value in typescript", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Budi")).toBe("Hello Budi");
    });
    it("should support rest parameter", () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", () => {
        function sayHello(firstname, lastName) {
            if (lastName) {
                return `Hello ${firstname} ${lastName}`;
            }
            else {
                return `Hello ${firstname}`;
            }
        }
        expect(sayHello("Irfan")).toBe("Hello Irfan");
        expect(sayHello("Irfan", "Zidni")).toBe("Hello Irfan Zidni");
    });
    it("should support function overloading", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe("irfan")).toBe("IRFAN");
    });
});
