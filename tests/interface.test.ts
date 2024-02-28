import { Person } from "../src/person";
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

  it("should interface function", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Irfan", "Zidni", "Muhammad"];
    console.info(names);
  });

  it("should support indexable interface non number", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Irfan",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Irfan");
    expect(dictionary["address"]).toBe("Indonesia");

    console.info(dictionary);
  });

  it("should support extend interface", () => {
    const employee: Employee = {
      id: "n12",
      name: "irfan",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "n21",
      name: "zidni",
      division: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Irfan",
      sayHello: function (name: string): string {
        return `Hello ${this.name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("zidni"));
  });

  it("should support intersection type", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "123",
      name: "irfan",
    };

    console.info(domain);
  });

  it("should support type assertions", () => {
    const person: any = {
      name: "irfan",
      age: 22,
    };

    const person2: Person = person as Person;

    // person2.sayHello("Budi")

    // Jadi tidak aman jika sampai salah konversi maka terjadi error
    console.info(person2);
  });
});
