class HealthCheckPage {
    ImprovementPlanComponent() {
      cy.get('button[dd-action-name="DD: Health instructions - Close"]').click();
    }
  
    TakeYourFirstHealthCheck() {
      cy.get('#health-check-start-survey').click();
      cy.wait(3000)
    }
  
    NextButtonClick() {
      cy.get('button[vf-button][preset-next]').click();
    }

    NextButtonThoughts() {
      cy.get('button[id="health-check-go-to-thoughts-step"]').click();
    }
  
    BackButtonClick() {
      cy.get('button[role="button"][name="Back"]').click();
    }
  
    introScreen() {
      // Handle the intro screen as needed
    }
  
    GetReadyScreen() {
      cy.get('#health-check-copy-link').click();
    }
  
    movitesScreen() {
      cy.get('input[type="range"]').each(($slider) => {
        const randomValue = Math.floor(Math.random() * 99) + 2; // Genera un valor aleatorio entre 2 y 100
        cy.wrap($slider).invoke('val', randomValue).trigger('input');
      })
    }

    thoughtsScreen() {
      cy.get('div[role="textbox"]').type("Build a House")
      cy.get('#health-check-go-to-habits-step').click()
    }

    habitsScreen() {
      for (let i = 2; i <= 10; i++) {
        cy.get('.checkbox-item:nth-child(${i}) mat-radio-button').eq(1).click();
      }
        cy.get('#health-check-go-to-ideas-step').click()
    }
    
    ideasScreen() {
      cy.get('textarea').each((textarea) => {
        cy.wrap(textarea).type('This is a test');
        cy.wait(1000);
      });
    }
  
    volunteersScreen() {
      cy.get('#health-not-volunteer').click();
    }
  
    submitButton() {
      cy.get('#health-check-submit').click();
    }
  
    diagnosticSubmitted() {
      cy.get('button[mod*="accent"]').contains('Okay').click();
    }
  }
  
  module.exports = new HealthCheckPage();
  