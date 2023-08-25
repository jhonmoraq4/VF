class BoardPage {

    WorkSpaceTitle() {
        //return cy.xpath("//div[contains(text(),'My workspaces')]")
        return cy.contains('div', 'My workspaces')
    }

  }


  
  module.exports = new BoardPage();