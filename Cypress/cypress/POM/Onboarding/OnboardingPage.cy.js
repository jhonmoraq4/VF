class OnboardingPage {

    getStarted() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    settingPassword(){
        cy.get('#vf-new-password').type('secret');
        cy.get('#vf-confirm-password').type('secret');
        cy.get('button.vf-button:nth-child(2)').click();
    }
    
    settingNames(name,lastName){
        cy.get('#mat-input-3').type(name);
        cy.get('#mat-input-4').type(lastName);
        // cy.get('#mat-slide-toggle-1').click();   If user want light theme
        cy.get('button.vf-button').click();
    }

    workPreferences(){
        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
        cy.get('#cdk-option-2').click();
        cy.get('#cdk-option-4').click();
        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
        cy.get('#select-function-640f4199ac4b0ba321d4bb2a').click();
        cy.get('#select-function-6260110e676703e39d9dcae7').click();
        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
    }

    workGoals(){
        cy.get('button.vf-button:nth-child(2)').click();


    }

  }
  
  module.exports = new OnboardingPage();