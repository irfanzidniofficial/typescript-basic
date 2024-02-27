describe("Object", () => {
  describe("should support in typescript", () => {
    const person: { id?: string; name: string; hoobies?: string[] } = {
      id: "2",
      name: "irfan",
    };

    (person.name = "zidni"), (person.id = "22");
  });
});
