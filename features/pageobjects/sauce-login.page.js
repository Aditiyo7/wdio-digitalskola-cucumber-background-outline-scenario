const { browser, $ } = require('@wdio/globals')

class SauceLoginPage {

    get username() {
        return $('#user-name');
    }

    get password() {
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    async inputUsername(username) {
       await this.username.setValue(username)
    }

    async inputPassword(password) {
       await this.password.setValue(password)
    }

    async clickLoginButton() {
        this.loginButton.click()
    }

    async login(username, password){
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginButton()
        await browser.pause(3000)
    }

    open() {
        return browser.url(`https://www.saucedemo.com/`);
    }
}

module.exports = new SauceLoginPage();