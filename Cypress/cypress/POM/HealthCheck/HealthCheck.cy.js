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
      cy.get('div[role="textbox"]').type("I would like to know more about technology")
      cy.get('#health-check-go-to-habits-step').click()
    }

    habitsScreen() {
      for (let i = 0; i < 10; i++) {
        cy.get('.habit-item-wrapper').eq(i)  // Seleccionar la opción correspondiente
          .find('.checkbox-item')             // Encontrar todos los elementos con la clase 'checkbox-item'
          .eq(i === 0 ? 2 : 1)                // Seleccionar el tercer checkbox para la primera opción, y el segundo checkbox para las demás
          .click();                           // Hacer clic en el checkbox correspondiente
      }
      cy.get('#health-check-go-to-ideas-step').click()
    }
    
    ideasScreen() {
      cy.get('textarea').each((textarea) => {
        cy.wrap(textarea).type('This is a test');
        cy.wait(1000);
      });
      cy.get('#health-check-go-to-volunteers-step').click()
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

     creatingReportButton() {
      cy.get('#health-check-create-report').click();
    //   cy.get('button[mat-flat-button][vfsteppernext][mod="accent"] span.mat-button-wrapper span:contains("That\'s correct")').click();
    //   cy.get('#mat-checkbox-65').click();
    //   cy.get('button[mat-flat-button][mod="accent"] span.mat-button-wrapper span:contains("Create report")').click();
    //   cy.wait(2000)
    //   cy.get('#health-check-creveal-step').click();
     }

    creatingReportFacilitator(){
      //cy.get('button[mat-flat-button][vfsteppernext][mod="accent"]').click();

      cy.get('button[mat-flat-button]').contains('Yes, that\'s me').click();
      //cy.get('button[mat-flat-button]').contains("No, that's not me").click();
    }

    creatingReportInclusion(){
      cy.get('button[mat-flat-button]').contains("That's correct").click();
      //cy.contains('button[mat-flat-button]', 'Cancel').click();      
    }
    
    creatingReportFinish(){
      cy.get('.mat-checkbox-inner-container').click();
      cy.wait(1)
      //cy.get('button[mat-flat-button]').contains("Create report").click();
      //cy.get('button[mat-flat-button]').contains('Create report').should('be.visible').click();
    
      //cy.contains('button[mat-flat-button]', 'Cancel').click();
  
    }

    healthCheckReportFinishedTitle(){
      return cy.get('h1.text-3xl[vftypography="headline-1"]').invoke('text')
    }


  }
  
  module.exports = new HealthCheckPage();
  