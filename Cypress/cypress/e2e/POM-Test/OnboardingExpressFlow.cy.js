import Chance from 'chance';

import UserRegistration from '../../POM/UserRegister/UserRegisterPage.cy'
import LogginPage from '../../POM/Loggin/Loggin.cy'
import Administrator from '../../POM/Board/Administrator.cy'
import OnboardingExpress from '../../POM/Onboarding/OnboardingExpress.cy'

describe('POM implementation for User Express Onboarding', () => {
  before(() => {
    cy.visit('https://staging-vega3.tomo.guru/register');
  });

  const chance = new Chance();

  it('User Registration', () => {
    const fakeFirstName = chance.first();
    const fakeLastName = chance.last();
    const fakeUser = `${fakeFirstName}.${fakeLastName}@client.bar`;
    const password = 'secret'
    const adminUser= 'admin@vegafactor.com'
    
    UserRegistration.emailToRegister(fakeUser, password); 
    cy.log('The new user will be: '+fakeUser)
    cy.wait(2000);
    
    LogginPage.loginInterface(adminUser, password); 
    cy.wait(2000);

    Administrator.AdministratorSection();

    let linkValue;
    Administrator.registrationLink().then((value) => {
      linkValue = value;
      //cy.log('Value returned is: ' + linkValue);
      cy.visit(linkValue);
    });

    OnboardingExpress.getStartedEx();
    cy.wait(2000)
    OnboardingExpress.settingPasswordEx();
    cy.wait(2000)






  })
})