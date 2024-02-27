describe("Union Type", function () {
  it("should support in typescrupt", function () {
    let sample: number | string | boolean = "Budi";

    sample = 100;
    console.info(sample);

    sample = "irfan";
    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof operator", function () {
    function procees(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(procees("zidni")).toBe("ZIDNI");
    expect(procees(100)).toBe(102);
    expect(procees(true)).toBe(false);
  });
});
