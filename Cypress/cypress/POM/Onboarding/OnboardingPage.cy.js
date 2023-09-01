class OnboardingPage {

    getStarted() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    settingPassword(pass){
        cy.get('#vf-new-password').type(pass);
        cy.get('#vf-confirm-password').type(pass);
        cy.get('button.vf-button:nth-child(2)').click();
    }
    
    settingNames(name,lastName){
        cy.get('[data-placeholder="First name (required)"]').type(name);
        //cy.get('#mat-input-3').type('Smith');
        cy.get('[data-placeholder="Last name (required)"]').type(lastName);
        //cy.get('#mat-input-4').type('1');

        //cy.get('#mat-slide-toggle-1').click() //Light Mode slider

        cy.get('button.vf-button').click();
    }

    workPreferences(){
        cy.contains('button','Generate randomly').click(); //first click to generate randomly
        cy.contains('button','Generate randomly').click(); //second click to generate randomly

        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(2000)
        
    }

    enjoyYourPreferences(){

        cy.contains('div','(explorer, achiever)').click();
        //cy.contains('div','(visionary, galvanizer)').click();
        //cy.contains('div','(visionary, explorer)').click();
        cy.contains('div','(galvanizer, achiever)').click();

        cy.get('button.vf-button:nth-child(2)').click();
        cy.wait(4000)

    }

    factorAIReport(){
        cy.wait(2000)
        cy.get('button.vf-button[label="Start using Factor"]').click();

    }

    personalMotivationReport(){
        cy.get('button.vf-button:nth-child(2)').click();
    }

    inviteFriendOptional(){
        cy.get('button.vf-button[label="See your diagnostic report"]').click();
    }

  }
  
  module.exports = new OnboardingPage();