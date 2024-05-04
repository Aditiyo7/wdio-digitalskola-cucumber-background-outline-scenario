const { $, browser } = require('@wdio/globals')

class CartPage {

    get checkoutButton() {
        return $('#checkout');
    }

    async validateOnPage() {
        await expect(this.checkoutButton).toHaveText("Checkout")
        await browser.pause(3000)
    }
}

module.exports = new CartPage();