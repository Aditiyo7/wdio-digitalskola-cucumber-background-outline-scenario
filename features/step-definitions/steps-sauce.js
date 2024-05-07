const { Given, When, Then } = require('@wdio/cucumber-framework');

const SauceLoginPage = require('../pageobjects/sauce-login.page');
const DashboardPage = require('../pageobjects/sauce-dashboard.page');
const CartPage = require('../pageobjects/sauce-cart.page')


Given("user is on sauce-demo page", async () => {
    await SauceLoginPage.open()
});

When(/^user login using username "(.*)" and password "(.*)"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

When(/^user input username with (\w+)$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with (\w+)$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
});

When(/^user click login button$/, async () => {
    await SauceLoginPage.clickLoginButton()
});

Then(/^user should redirect to homepage$/, async () => {
    await DashboardPage.validateOnPage()
});

When("User add item to cart", async () => {
    await DashboardPage.addToCartItem()
})

When("User click cart icon", async () => {
    await DashboardPage.clickCartButton()
})

Then("user succes validate item in cart", async () => {
    await CartPage.validateOnPage()
})