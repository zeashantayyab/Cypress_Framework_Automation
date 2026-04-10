import LoginPage from "../../support/pages/Login_page";

const loginPage1 = new LoginPage();

describe("WLP Login", () => {
  let variable1;

  beforeEach(() => {
    loginPage1.visit();

    cy.fixture("WLP_Login").then((data) => {
      variable1 = data;
    });
  });
  it("should login to WLP", () => {
    variable1.placeHolder.forEach((testData) => {
      loginPage1.loginUser(
        testData.username,
        testData.password,
        testData.valid,
      );
    });
  });

  it("should login again", () => {
    loginPage1.enterUserName(variable1.placeHolder.username);
  });

  it("should valid login again", () => {
    loginPage1.validUserPassword(
      variable1.placeHolder[0].username,
      variable1.placeHolder[0].password,
    );
  });

  it("should not login with empty username", () => {
    loginPage1.inputYourUserName();
  });

  it("should valid login again for further testing", () => {
    loginPage1.validUserPassword(
      variable1.placeHolder[0].username,
      variable1.placeHolder[0].password,
    );
  });

  it("should click upload button", () => {
    loginPage1.validUserPassword(
      variable1.placeHolder[0].username,
      variable1.placeHolder[0].password,
    );
    loginPage1.clickUploadbutton();
  });
});
