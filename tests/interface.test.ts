import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 12,
      name: "Irfan",
      nib: "123589",
      npwp: "124890",
    };
    console.info(seller);
    seller.name = "Zidni";
    console.info(seller);

    
  });
});
