Feature: Process Login
  After login, home page is shown

Scenario: Login
  Given I am on the main page
  When Click Go to Login Form
  And Fill in email
  And Fill in password
  And Click submit button
  Then I should be on the home page
