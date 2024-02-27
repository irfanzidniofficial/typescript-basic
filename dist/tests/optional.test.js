"use strict";
describe("Optional", () => {
    it("Should support optional in typescript", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Irfan");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
