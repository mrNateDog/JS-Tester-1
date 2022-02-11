const HelloNameTemp = HelloName;
describe("Unit Test Examples", () => {
  it("should say hello plus my name", () => {
    expect(HelloName("Erick")).toBe("Hello Erick!");
  });

  describe("when checking name", () => {
    describe("when name is empty", () => {
      it("should return false", () => {
        expect(checkAndSayHello("")).toBe(false);
      });
    });

    describe("when name is correct", () => {
      it("should return Julio", () => {
        //mocked the function to return "julio"
        HelloName = jasmine.createSpy().and.returnValue("Julio");
        expect(checkAndSayHello("Erick")).toBe("Julio");
      });
    });
  });

  describe("Integration Test Example", () => {
    describe("when checking name", () => {
      it("should return given name", () => {
        //moving back to the original function
        HelloName = HelloNameTemp;
        //testing both functions - and that's why it's integration.. not just testing one, testing them together
        expect(checkAndSayHello("Erick")).toBe("Hello Erick!");
      });
    });
  });
});

//mock when unit tests
//dont' mock w. integration tests
// fail for the right reason -- you don't have code, you just have the test - tbd concept - test first then code, or not the right impliementation
//mocking & stub -
