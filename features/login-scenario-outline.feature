Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given user is on sauce-demo page
    When user input username with <username>
    When user input password with <password>
    Then user click login button
    Then user should redirect to homepage

    Examples:
      | username        | password              |
      | standard_user   | secret_sauce          |