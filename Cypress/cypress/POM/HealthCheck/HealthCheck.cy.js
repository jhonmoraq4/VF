class HealthCheckPage {
    ImprovementPlanComponent() {
      cy.get('button[dd-action-name="DD: Health instructions - Close"]').click();
    }
  
    TakeYourFirstHealthCheck() {
      cy.get('#health-check-start-survey').click();
    }
  
    NextButtonClick() {
      cy.get('button[vf-button][preset-next]').click();

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
      const maintainAsIsElements = '.mat-radio-container';
      const improveLaterElements = '.mat-radio-container';
      const prioritizeElements = '.mat-radio-container';
  
      for (let i = 0; i < 10; i += 3) {
        cy.get(maintainAsIsElements).eq(i).click();
        cy.wait(1000);
      }
  
      for (let i = 11; i < 20; i += 2) {
        cy.get(improveLaterElements).eq(i).click();
        cy.wait(1000);
      }
  
      for (let i = 21; i < 30; i += 3) {
        cy.get(prioritizeElements).eq(i).click();
        cy.wait(1000);
      }
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

    creatingReport() {
      cy.get('#health-check-create-report').click();
      cy.get('button[mat-flat-button][vfsteppernext][mod="accent"]').click();
      cy.get('button[mat-flat-button][vfsteppernext][mod="accent"] span.mat-button-wrapper span:contains("That\'s correct")').click();
      cy.get('#mat-checkbox-65').click();
      cy.get('button[mat-flat-button][mod="accent"] span.mat-button-wrapper span:contains("Create report")').click();
      cy.wait(2000)
      cy.get('#health-check-creveal-step').click();
    }
  }
  
  module.exports = new HealthCheckPage();
  