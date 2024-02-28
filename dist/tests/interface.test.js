describe("Interface", () => {
    it("should support in typescript", () => {
        const seller = {
            id: 12,
            name: "Irfan",
            nib: "123589",
            npwp: "124890",
        };
        console.info(seller);
        seller.name = "Zidni";
        console.info(seller);
    });
    it("should interface function", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it("should support indexable interface", () => {
        const names = ["Irfan", "Zidni", "Muhammad"];
        console.info(names);
    });
    it("should support indexable interface non number", () => {
        const dictionary = {
            name: "Irfan",
            address: "Indonesia",
        };
        expect(dictionary["name"]).toBe("Irfan");
        expect(dictionary["address"]).toBe("Indonesia");
        console.info(dictionary);
    });
    it("should support extend interface", () => {
        const employee = {
            id: "n12",
            name: "irfan",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "n21",
            name: "zidni",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    it("should support function in interface", () => {
        const person = {
            name: "Irfan",
            sayHello: function (name) {
                return `Hello ${this.name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("zidni"));
    });
    it("should support intersection type", () => {
        const domain = {
            id: "123",
            name: "irfan",
        };
        console.info(domain);
    });
    it("should support type assertions", () => {
        const person = {
            name: "irfan",
            age: 22,
        };
        const person2 = person;
        // person2.sayHello("Budi")
        // Jadi tidak aman jika sampai salah konversi maka terjadi error
        console.info(person2);
    });
});
export {};
