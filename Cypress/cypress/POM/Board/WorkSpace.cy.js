class WorkspacePage {
  workSpaceComponent() {
    
    cy.findByRole('button', { id: 'create-new-workspace' }).as('WorkSpaceButton');
    cy.findByPlaceholderText('e.g. Marketing strategies').as('NewWorkspaceName');
    cy.findByRole('button', { name: 'Create workspace' }).as('CreateWorkSpaceButton');
    cy.wait(2000); // Esperar 2 segundos
    cy.findByRole('link', { name: 'Health' }).as('HealthCheckOption');
    cy.findByText()
    return cy.wrap(this);
  }

  workSpaceCreation(workspaceName) {
    cy.get('@WorkSpaceButton').click()
    cy.contains('button', 'New blank workspace').click()
    cy.get('@NewWorkspace').click()
    cy.get('@NewWorkspaceName').type(workspaceName)
    cy.get('@CreateWorkSpaceButton').click()
    cy.wait(2000) // Esperar 2 segundos
  }

  workSpaceOptions() {
    cy.get('@HealthCheckOption').click()
  }
}

module.exports = new WorkspacePage();