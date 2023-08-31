Feature: Login Page

Feature Page where the user can login to their accounts

Background: 
    Given A user enters to the login Page
Scenario: Success Login
 
    When A user enters the username "charlie.green@client.bar" and password "secret"
    And A user creates workspace "TestWS106"   
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
