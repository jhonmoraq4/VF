import LogginPage from '../../POM/Loggin/Loggin.cy'
import BoardPage from '../../POM/Board/Board.cy'
import WorkspacePage from '../../POM/Board/WorkSpace.cy'
import HealthCheckPage from 'cypress/POM/HealthCheck/HealthCheck.cy';

describe('POM implementation', () => {
  before(() => {
    cy.visit('https://test414.staging.factor.work/login');
  });

  it('HealthCheck test', () => {
    LogginPage.loginInterface('edith.richards@client.bar', 'secret');
    cy.wait(2000);
    BoardPage.WorkSpaceTitle().should('have.text', 'My workspaces');
    cy.wait(2000);
    WorkspacePage.workSpaceCreation('POMTestWS100');
    cy.wait(3000);
    WorkspacePage.workSpaceHealthCheckSelection();
    cy.wait(3000);
    HealthCheckPage.ImprovementPlanComponent();
    cy.wait(3000);
    HealthCheckPage.TakeYourFirstHealthCheck();
    cy.wait(2000);
    HealthCheckPage.NextButtonClick();
    cy.wait(2000);
    HealthCheckPage.NextButtonClick();
    cy.wait(2000);
    HealthCheckPage.movitesScreen();
    cy.wait(2000);
    HealthCheckPage.thoughtsScreen();
    cy.wait(2000);
    HealthCheckPage.habitsScreen();
    cy.wait(2000);
    HealthCheckPage.ideasScreen();
    cy.wait(2000);
    HealthCheckPage.volunteersScreen();
    cy.wait(2000);
    HealthCheckPage.submitButton();
    cy.wait(2000)
    HealthCheckPage.diagnosticSubmitted();
    cy.wait(2000)
    HealthCheckPage.creatingReportButton();
    cy.wait(2000);
    HealthCheckPage.creatingReportFacilitator();
    cy.wait(2000);
    HealthCheckPage.creatingReportInclusion();
    cy.wait(2000);
    HealthCheckPage.creatingReportFinish();
    cy.wait(2000);
    //HealthCheckPage.healthCheckReportFinishedTitle().should('have.text', 'Health Check report');

  });

});
