class WorkspacePage {


  workSpaceCreation(workspaceName) {
    cy.get('button[aria-label="Find or create a workspace"]').click()
    cy.contains('button', 'New blank workspace').click()
    cy.get('#vf-new-workspace-name-input').type(workspaceName)
    cy.contains('button', 'Create workspace').click()
    cy.wait(2000) // Esperar 2 segundos
  }

  workSpaceOptions() {
    
  }
}

module.exports = new WorkspacePage();