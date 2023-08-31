class OnboardingPage {

    getStarted() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    settingPassword(){
        cy.get('#vf-new-password').type('secret');
        cy.get('#vf-confirm-password').type('secret');
    }
  
  }
  
  module.exports = new OnboardingPage();