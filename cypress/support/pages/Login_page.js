//refering fixture here

//import cypress from 'cypress';

/*cy.fixture('wlp_Login').then((dataNew) => {}),*/

import Locators from "./Locators";

const Locators1 = new Locators();

class LoginPage {
  constructor() {
    let gblobalvarriable2 = null; // Initialize as needed; adjust type/value based on usage
  }

  validUserPassword(username, password) {
    // cy.fixture('WLP_Login').then((data2) => {
    // let data3;
    //data3 = data2;
    //cy.get('#mat-input-0').type(Cypress.env('username'));
    //cy.get('#mat-input-1').type(data3.placeHolder[0].password);
    cy.get(Locators1.LoginPageLocators.usernameInput).type(username);
    cy.get(Locators1.LoginPageLocators.passwordInput).type(password);
    this.submitButton();
    //  });
  }

  visit() {
    cy.visit("/smart-cert/#/login");
  }

  submitButton() {
    cy.get(Locators1.LoginPageLocators.SubmitEvent).click().wait(1000);
  }

  enterUserName() {
    cy.get(Locators1.LoginPageLocators.usernameInput).type(
      Cypress.env("username"),
    );
  }

  logOut() {
    cy.get(Locators1.LoginPageLocators.logOutButton).click({
      timeout: 10000,
      force: true,
    });
  }

  loginUserName() {
    cy.get(Locators1.LoginPageLocators.usernameInput).type(username);
  }

  //login functiona with co
  loginUser(username, password, valid) {
    cy.get(Locators1.LoginPageLocators.usernameInput).type(
      username.replace("{username}", username),
    );
    cy.get(Locators1.LoginPageLocators.passwordInput).type(
      password.replace("{password}", password),
    );
    this.submitButton();
    cy.wait(5000);

    if (valid == true) {
      cy.get(Locators1.LoginPageLocators.userMenu).click({
        timeout: 50000,
        force: true,
      });
      this.logOut();
    } else if (valid == "emptyUserName") {
      cy.visit("/smart-cert/#/login");
      cy.get(Locators1.LoginPageLocators.usernameInput).type("{backspace}");
      cy.get(Locators1.LoginPageLocators.passwordInput).type(password);
      this.submitButton();
      cy.get(Locators1.LoginPageLocators.invalidMessage).then((el) => {
        const invalidMessage = el.text().trim();
        expect(invalidMessage).to.equal("Please enter your email or username.");
      });
    } else {
      cy.get(Locators1.LoginPageLocators.invalidMessage).should(
        "contain",
        " Invalid username or password.",
      );
    }
  }

  inputYourUserName() {
    cy.get(Locators1.LoginPageLocators.passwordInput).type("Smart786!");
    this.submitButton();
    cy.get(Locators1.LoginPageLocators.inputYourUserNameMessage).then((el) => {
      const inputYourUserNameMessage = el.text().trim();
      expect(inputYourUserNameMessage).to.equal("Please input your Username!");
    });
  }

  clickUploadbutton() {
    cy.get(Locators1.uploadFileLocators.uploadFileButton).click();
    cy.get(Locators1.uploadFileLocators.clickNextButton).should("be.visible");
    cy.get(Locators1.uploadFileLocators.clickNextButton).click();
  }
}

export default LoginPage;
