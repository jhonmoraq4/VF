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
      const sliderHandle = '.mdc-slider__thumb';
    
      for (let i = 0; i < 6; i++) {
        cy.get(sliderHandle)
          .eq(i)
          .then((slider) => {
            // Habilitar pointer-events
            cy.enablePointerEvents();
            
            // Obtener el bounding box
            const boundingBox = slider[0].getBoundingClientRect();
            const start_x = boundingBox.x;
            const start_y = boundingBox.y;
    
            cy.get(sliderHandle).eq(i).trigger('mousedown', { which: 1, force: true });
            
            // Define how many pixels it will move
            const pixels_to_drag = Cypress._.random(60, 200);
    
            // Calculate the new X_position
            const end_x = start_x + pixels_to_drag;
    
            cy.get(sliderHandle)
              .eq(i)
              .trigger('mousemove', {
                clientX: end_x,
                clientY: start_y,
                force: true, // Agrega force: true aquí también
              })
              .trigger('mouseup', { force: true });
            
            // Deshabilitar pointer-events nuevamente
            cy.get(slider).invoke('attr', 'class', 'mdc-slider__thumb enable-pointer-events');
            
            if (i !== 0 && i % 2 === 0) {
              cy.get(sliderHandle)
                .eq(i)
                .trigger('wheel', { deltaY: 200, force: true });
            }
          });
    
        cy.wait(1000);
      }
    }
  
    thoughtsScreen() {
      cy.get('application[name="Rich Text Editor"] paragraph').click();
      cy.get('textbox[name="Editor editing area: main"]').type(
        'I would like to know more about technology'
      );
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
  }
  
  module.exports = new HealthCheckPage();
  