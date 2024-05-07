@sauce
Feature: Homework cucumber testing

    @login @v1
    Scenario: User login successfully and validate in dashboard page
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"
        And user click login button
        Then user should redirect to homepage

    @login @v2
    Scenario: User login failed with wrong password
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "wrong_password"
        And user click login button
        Then user should redirect to homepage