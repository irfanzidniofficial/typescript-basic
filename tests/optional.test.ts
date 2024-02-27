describe("Optional", () => {
  it("Should support optional in typescript", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Irfan");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
