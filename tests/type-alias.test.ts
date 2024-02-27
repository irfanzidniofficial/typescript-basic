import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: "2",
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 20000,
      category: category,
      
    };

    console.info(product);
  });
});
