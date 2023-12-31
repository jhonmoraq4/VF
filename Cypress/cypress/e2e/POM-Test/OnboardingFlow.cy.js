import Chance from 'chance';

import UserRegistration from '../../POM/UserRegister/UserRegisterPage.cy'
import LogginPage from '../../POM/Loggin/Loggin.cy'
import Administrator from '../../POM/Board/Administrator.cy'
import OnboardingPage from '../../POM/Onboarding/OnboardingPage.cy'

describe('POM implementation for User Registration', () => {
  before(() => {
    cy.visit('https://test414.staging.factor.work/register');
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
  
    OnboardingPage.getStarted();
    cy.wait(2000);
    OnboardingPage.settingPassword(password);
    cy.wait(2000);
    OnboardingPage.settingNames(fakeFirstName,fakeLastName);
    cy.wait(2000);
    OnboardingPage.workPreferences();
    cy.wait(2000);
    OnboardingPage.enjoyYourPreferences();
    cy.wait(2000);
    OnboardingPage.factorAIReport();
    cy.wait(2000);
    OnboardingPage.personalMotivationReport();
    cy.wait(2000);
    OnboardingPage.inviteFriendOptional();
    cy.wait(2000);
   });

});