Feature: Homework cucumber testing

    Scenario: User login successfully and validate in dashboard page
        Given user is on sauce-demo page
        When user input username with "standard_user"
        And user input password with "secret_sauce"
        And user click login button
        Then user should redirect to homepage 
    
    Scenario: User add item to cart and validate item in cart
        When User add item to cart
        When User click cart icon
        Then user succes validate item in cart