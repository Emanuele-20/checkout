const Shop = require('./checkout')



describe("Supermarket Checkout", () => {
    it('Returns an object when a method is called on the class instance', () => {
        shop = new Shop
        expect(shop).toBeInstanceOf(Shop);
    });
});

describe("Supermarket Checkout", () => {
    it('Returns -1 when "aBc" is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout("aBc")).toBe(-1);
    });
});