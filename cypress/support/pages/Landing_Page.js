import Locators from './Locators';
const Locators1 = new Locators();

class landingPage {
  visit() {
    cy.visit('/smart-cert/#/login');
  }

  loginUserLandingPage(username, password) {
    cy.get(Locators1.LoginPageLocators.usernameInput).type(username);
    cy.get(Locators1.LoginPageLocators.passwordInput).type(password);
    cy.get(Locators1.LoginPageLocators.SubmitEvent).click();
  }

  uploadFile() {
    cy.get(Locators1.uploadFileLocators.uploadFileButton).click();
  }
}

export default landingPage;
