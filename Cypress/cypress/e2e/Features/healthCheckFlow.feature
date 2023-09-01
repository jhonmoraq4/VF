Feature: Health Check Flow

Background: 
    Given A user enters to the login Page
Scenario: Success Complete health check
 
    When A user enters the username "edith.richards@client.bar" and password "secret"
    And A user creates workspace "TestWS123"   
    And A user selects HealthCheck option
    And A user Starts HealthCheck
    And A user completes Motives Screen from Health Check
    And A user completes Thoughts Screen from Health Check
    And A user completes Habits Screen from Health Check
    And A user completes Ideas Screen from Health Check
    And A user completes volunteers Screen from Health Check
    And A user completes Health Check flow
    And A user Submit Health check
    And A user starts report creation
    And A user starts report creation - Facilitator
    And A user starts report creation - Inclusion
    Then A user starts report creation - Finish
