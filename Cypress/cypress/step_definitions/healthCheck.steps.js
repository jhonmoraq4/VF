import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogginPage from '../POM/Loggin/Loggin.cy'
import BoardPage from '../POM/Board/Board.cy'
import WorkspacePage from '../POM/Board/WorkSpace.cy'
import HealthCheckPage from '../POM/HealthCheck/HealthCheck.cy';

Given("A user enters to the login Page", () => {
  cy.visit("/");
});

When('A user enters the username {string} and password {string}',(username,password)=>{ 

    LogginPage.loginInterface(username,password); 
})

When('A user creates workspace {string}',(WorkSpace)=>{ 

    WorkspacePage.workSpaceCreation(WorkSpace);
    cy.wait(2000);
    
})

When('A user selects HealthCheck option',()=>{ 
  
  WorkspacePage.workSpaceHealthCheckSelection();
  cy.wait(2000);
})

When('A user Starts HealthCheck',()=>{ 

  HealthCheckPage.ImprovementPlanComponent();
  cy.wait(2000);
  HealthCheckPage.TakeYourFirstHealthCheck();
  cy.wait(2000);
  HealthCheckPage.NextButtonClick();
  cy.wait(2000);
  HealthCheckPage.NextButtonClick();
  cy.wait(2000);
  
})

When('A user completes Motives Screen from Health Check',()=>{ 

  HealthCheckPage.movitesScreen();
  cy.wait(2000);

})

When('A user completes Thoughts Screen from Health Check',()=>{ 

  HealthCheckPage.thoughtsScreen();
  cy.wait(2000);

})

When('A user completes Habits Screen from Health Check',()=>{ 

  HealthCheckPage.habitsScreen();
  cy.wait(2000);

})

When('A user completes Ideas Screen from Health Check',()=>{ 

  HealthCheckPage.ideasScreen();
  cy.wait(2000);

})

When('A user completes volunteers Screen from Health Check',()=>{ 

  HealthCheckPage.volunteersScreen();
  cy.wait(2000);

})

When('A user completes Health Check flow',()=>{ 

  HealthCheckPage.submitButton();
  cy.wait(2000);

})

When('A user Submit Health check',()=>{ 

  HealthCheckPage.diagnosticSubmitted();
  cy.wait(2000);

})

When('A user starts report creation',()=>{ 

  HealthCheckPage.creatingReportButton();
  cy.wait(2000);

})

When('A user starts report creation - Facilitator',()=>{ 

  HealthCheckPage.creatingReportFacilitator();
  cy.wait(2000);

})

When('A user starts report creation - Inclusion',()=>{ 

  HealthCheckPage.creatingReportInclusion();
  cy.wait(2000);

})

When('A user starts report creation - Finish',()=>{ 
 
  HealthCheckPage.creatingReportFinish();
  cy.wait(2000);

})