import LogginPage from '../../POM/Loggin/Loggin.cy'
import BoardPage from '../../POM/Board/Board.cy'
import WorkspacePage from '../../POM/Board/WorkSpace.cy'


describe('POM implementation', () => {
  beforeEach(() => {
    cy.visit('https://test414.staging.factor.work/login');
  });

  it('User Log in', () => {
    LogginPage.loginInterface('diana.mitchell@client.bar', 'secret');
    BoardPage.WorkSpaceTitle().should('have.text', 'My workspaces');
  });

  it('Go for workspace', () => {
    WorkspacePage.workSpaceComponent()
    WorkspacePage.workSpaceCreation('Test1WorkSpace')
    WorkspacePage.workSpaceOptions();
    BoardPage.WorkSpaceTitle().should('have.text', 'My workspaces');
  });
});
