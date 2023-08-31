import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("POM A user enters to the login Page", () => {
    cy.visit("https://test414.staging.factor.work/login");
  });
  
When('A user enters the username {string}', () => {
    cy.get('input[type="email"]').type('queenie.quinn@client.bar')
  })
  
When('A user enters the password {string}', () => {
    cy.get('input[type="password"]').type('secret')
  })
  
When('A user clicks on the login button', () => {
    cy.get('#vf-submit-signin').click();
  })
  
Then('A user will be logged in', () => {
      cy.url().should('contains','/newsfeed')
  })


  
      
      