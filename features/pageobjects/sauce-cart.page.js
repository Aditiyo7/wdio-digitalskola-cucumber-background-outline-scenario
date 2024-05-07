const { $, browser } = require('@wdio/globals')

class CartPage {
    
    get shoppingCartList() {
        return $('//*[@data-test="item-quantity"]')
    }

    async validateOnPage() {
        await expect(this.shoppingCartList).toHaveText("1")
    }
}

module.exports = new CartPage();