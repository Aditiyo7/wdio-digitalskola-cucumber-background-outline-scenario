Feature: Homework cucumber testing

    Background:
        Given user is on sauce-demo page
        When user login using username "standard_user" and password "secret_sauce"

    Scenario: User login successfully and validate in dashboard page
        And user click login button
        Then user should redirect to homepage 
    
    Scenario: User add item to cart and validate item in cart
        When User add item to cart
        When User click cart icon
        Then user succes validate item in cart