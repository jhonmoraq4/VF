class Administrator {


    AdministratorSection() {
      cy.contains('div', 'Status date').click()
      cy.contains('div', 'Status date').click()
      
      cy.get('button.mat-flat-button.mod-accent[aria-haspopup="menu"]').eq(1).click();
      //cy.get('#admin-copy-invite-link').click()
      cy.wait(2000);

    }

    registrationLink() {
        return cy.get('#admin-copy-invite-link')
          .invoke('attr', 'value')
          .then((linkValue) => {
            return linkValue;
          });
      }
  
  }
  
  module.exports = new  Administrator();