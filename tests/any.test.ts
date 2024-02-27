describe("Any", function () {
  it("should support in typescrupt", function () {
    const person: any = {
      id: 1,
      name: "Muhammad Irfan Zidni",
      age: 22,
    };

    person.age = 20;
    person.address = "Indonesia";

    console.info(person);
  });
});
