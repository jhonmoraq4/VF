import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Chance from 'chance';

import UserRegistration from '../../POM/UserRegister/UserRegisterPage.cy'
import LogginPage from '../../POM/Loggin/Loggin.cy'
import Administrator from '../../POM/Board/Administrator.cy'
import OnboardingPage from '../../POM/Onboarding/OnboardingPage.cy'

Given("A user enters to the registration Page", () => {
    cy.visit('https://test414.staging.factor.work/register');
});


When('A new user registers in VegaFactor',()=>{ 

    const chance = new Chance();
    const fakeFirstName = chance.first();
    const fakeLastName = chance.last();
    const fakeUser = `${fakeFirstName}.${fakeLastName}@client.bar`;
    const password = 'secret'
    
    
    UserRegistration.emailToRegister(fakeUser, password); 
    cy.log('The new user will be: '+fakeUser)

})

When('User log in as admin',()=>{ 
    const adminUser= 'admin@vegafactor.com'
    const password = 'secret'
    LogginPage.loginInterface(adminUser, password); 
    cy.wait(2000);
    
})

When('Copy an invite link and open it',()=>{ 
  
 
    Administrator.AdministratorSection();

    let linkValue;
    Administrator.registrationLink().then((value) => {
      linkValue = value;
      //cy.log('Value returned is: ' + linkValue);
      cy.visit(linkValue);
    });

})

