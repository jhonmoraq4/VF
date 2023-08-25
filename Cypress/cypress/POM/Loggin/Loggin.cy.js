class LogginPage {
    constructor() {
      this.username_input = '[placeholder="Email"]';
      this.password_input = '[placeholder="Password"]';
      this.login_button = '#vf-submit-signin';
    }
  
    loginInterface(username, password) {
      cy.get(this.username_input).type(username);
      cy.get(this.password_input).type(password);
      cy.get(this.login_button).click();
    }
  }

  module.exports = new LogginPage();