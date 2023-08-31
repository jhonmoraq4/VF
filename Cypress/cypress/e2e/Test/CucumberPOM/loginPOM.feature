Feature: Login Page

Scenario: Success Login

    Given A user enters to the login Page
    When A user enters the username "queenie.quinn@client.bar"
    And A user enters the password "secret"
    And A user clicks on the login button
    Then A user will be logged in