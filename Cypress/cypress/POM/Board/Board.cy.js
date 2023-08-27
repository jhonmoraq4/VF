class BoardPage {

    WorkSpaceTitle() {
        return cy.contains('div', 'My workspaces')
    }

  }
  
  module.exports = new BoardPage();