class OnboardingPage {

    getStarted() {
        cy.get('button[vf-button][label="Get started"]').click();
    }

    settingPassword(){
        cy.get('#vf-new-password').type('secret');
        cy.get('#vf-confirm-password').type('secret');
        cy.contains('button', 'Next').click();
    }
    
    settingNames(name,lastName){
        cy.get('[data-placeholder="First name (required)"]').type(name);
        cy.get('[data-placeholder="Last name (required)"]').type(lastName);
        // cy.get('#mat-slide-toggle-1').click();   If user want light theme
        cy.contains('button', 'Next').click();
        cy.contains('button', 'Next').click();
        cy.contains('button', 'Next').click();   
    }

    avatarPage(){
        cy.contains('button','Generate randomly').click();
        cy.wait(2000);
        cy.contains('button','Generate randomly').click();
        cy.wait(2000);
        cy.contains('button', 'Next').click();
    }

    workPreferences(){
        cy.get('#cdk-option-2').click();
        cy.wait(1000);
        cy.get('#cdk-option-4').click();
        cy.wait(1000);
        cy.contains('button', 'Next').click();
    }

    organizationsPage(){
        cy.get('[data-placeholder="Search for a profession or select below"]').type('an');
        cy.contains('vf-listbox-item', 'Analysis').click();
        cy.wait(1000);
        cy.contains('vf-listbox-item', 'Manufacturing').click();
        cy.wait(1000);
        cy.contains('button', 'Next').click();
        cy.wait(1000);
        cy.contains('button', 'Next').click();
    }

    workproblemPage(){
        cy.get('textarea[placeholder="Example: We sell software that helps people find the best donuts near them. Big company customers subscribe to our platform to get the early access to their city’s best donuts. We’re looking to improve the satisfaction levels of our biggest customers.').type('Aprender sobre tecnología')
        cy.wait(1000);
        cy.get('textarea[placeholder="Example:  Our team is a sales team. We cannot change the product, but we can change how we work with customers."]').type('tecnología');
        cy.wait(1000);
        cy.contains('button', 'Next').click();
        cy.wait(30000)
    }

    stackandcardsPage(){
        cy.get('#mat-checkbox-3').click();
        cy.contains('button', 'Next').click();
    }

    layoutsPage(){
        cy.contains('vf-listbox-item', 'Problem solving board').click();
        cy.wait(1000);
        cy.contains('vf-listbox-item', 'Colleague workload').click();
        cy.wait(1000);
        cy.contains('vf-listbox-item', 'Table of updates').click();
        cy.wait(1000);
        cy.contains('button', 'Next').click();
        cy.wait(1000);
        cy.get('body > vf-app > ui-view > vf-onboarding-container-v2 > vf-onboarding-stepper > vf-onboarding-container > vf-particles > div.vf-particles-wrapper > div.vf-particles-content > div > div > div > vf-stepper > div > div > vf-screen-stack-review > div.hidden.md\\:flex.mb-4 > div.w-4\\/6.px-6 > vf-step-actions > button.vf-button.mat-button-base.size-lg.mat-flat-button.vf-stepper-next.brk.vf-color-bg-gradient.vf-color-button.vf-color-button-bg-hover.vf-colormod-none.vf-theme.zone-modal.ng-star-inserted')
            .click();

 
    }

    skillsPage(){
        cy.contains('button', 'Next').click();
        cy.wait(5000)
        cy.contains('button', 'Next').click();
        cy.wait(1000)
        cy.get('body > vf-app > ui-view > vf-onboarding-container-v2 > vf-onboarding-stepper > vf-onboarding-container > vf-particles > div.vf-particles-wrapper > div.vf-particles-content > div > div > div > vf-stepper > div > div > vf-screen-skill-review > div.hidden.md\\:flex.mb-4 > div.w-4\\/6.px-6 > vf-step-actions > button.vf-button.mat-button-base.size-lg.mat-flat-button.vf-stepper-next.brk.vf-color-bg-gradient.vf-color-button.vf-color-button-bg-hover.vf-colormod-none.vf-theme.zone-modal.ng-star-inserted')
            .click();

    
    }
  }
  
  module.exports = new OnboardingPage();