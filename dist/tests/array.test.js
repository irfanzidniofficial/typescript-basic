"use strict";
describe("Array", function () {
    it("should same with javascipt", function () {
        const names = ["irfan", "zidni", "muhammad"];
        const values = [1, 2, 3];
        console.log(names);
        console.log(values);
    });
    it("should support read only array", function () {
        const hobbies = ["Belajar", "Menulis"];
        console.log(hobbies);
        // hobbies[0] = "Main Game"; // Kalau di rubah pasti eror karena read only
    });
    it("should support tupple", function () {
        const person = ["irfan", "zidni", 22];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
