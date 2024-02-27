describe("Type Alias", () => {
    it("should support in typescript", () => {
        const category = {
            id: "2",
            name: "Handphone",
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 20000,
            category: category,
        };
        console.info(product);
    });
});
export {};
