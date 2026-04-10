class Locators {
  constructor() {
    this.LoginPageLocators = {
      usernameInput: 'input[formcontrolname="userName"]',
      passwordInput: 'input[formcontrolname="password"]',
      SubmitEvent: 'button[type="submit"]',
      errorMessage: "#mat-mdc-error-0",
      invalidMessage: ".message",
      inputYourUserNameMessage: "#mat-mdc-error-0",
      userMenu: "div.settings-wrapper > .mat-mdc-menu-trigger",
      logOutButton: ".mat-mdc-menu-item-text > .txt",
    };

    this.uploadFileLocators = {
      uploadFileButton: ".button.secondary", //if there is space between words use "." and for multiple class use "." between them
      clickNextButton: ".button.primary",
    };
  }
}
export default Locators;
