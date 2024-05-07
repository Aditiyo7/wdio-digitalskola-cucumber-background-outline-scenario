const { $ } = require('@wdio/globals')

class DashboardPage {

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartButton() {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    async validateOnPage() {
        await expect(this.addToCartButton).toHaveText("Add to cart")
    }

    async addToCartItem() {
        await this.addToCartButton.click()
    }

    async clickCartButton() {
        await this.cartButton.click()
    }
}

module.exports = new DashboardPage();