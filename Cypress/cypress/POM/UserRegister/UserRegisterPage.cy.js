class UserRegisterPage {

    emailToRegister(email) {
      cy.get('#email').type(email)
      cy.get('#vf-register-account').click()
      cy.get('#register-return-to-login').click()
  
    }
  
  }
  
  module.exports = new UserRegisterPage();