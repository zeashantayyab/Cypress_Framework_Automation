describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  it("Does not do much!", () => {
    expect(true).to.equal(false);
  });
});

//need to run npx cypress open in terminal to open the cypress test runner and then click on the demo_spec.cy.js file to run the tests.
