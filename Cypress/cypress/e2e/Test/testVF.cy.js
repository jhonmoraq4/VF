import LogginPage from '../../POM/Loggin/Loggin.cy'
import BoardPage from '../../POM/Board/Board.cy'
import WorkspacePage from '../../POM/Board/WorkSpace.cy'


describe('POM implementation', () => {
  before(() => {
    cy.visit('https://test414.staging.factor.work/login');
  });

  it('HealthCheck test', () => {
    LogginPage.loginInterface('diana.mitchell@client.bar', 'secret');
    BoardPage.WorkSpaceTitle().should('have.text', 'My workspaces');
    WorkspacePage.workSpaceCreation('Test100WorkSpace')
    WorkspacePage.workSpaceOptions();
  });



});
