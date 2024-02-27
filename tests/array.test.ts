describe("Array", function () {
  it("should same with javascipt", function () {
    const names: string[] = ["irfan", "zidni", "muhammad"];
    const values: number[] = [1, 2, 3];

    console.log(names);
    console.log(values);
  });

  it("should support read only array", function () {
    const hobbies: ReadonlyArray<string> = ["Belajar", "Menulis"];

    console.log(hobbies);

    // hobbies[0] = "Main Game"; // Kalau di rubah pasti eror karena read only
  });

  it("should support tupple", function () {
    const person: readonly [string, string, number] = ["irfan", "zidni", 22];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
