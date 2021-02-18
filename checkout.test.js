const Shop = require('./checkout')



describe("Supermarket Checkout", () => {
    
    it('Returns a new instance of the Shop Class', () => {
        shop = new Shop
        expect(shop).toBeInstanceOf(Shop);
    });


    it('Returns -1 when "aBc" is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout("aBc")).toBe(-1);
    });

    it('Returns -1 when "-B8x" is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout("-B8x")).toBe(-1);
    });

    it('Returns -1 when an integer is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout(18)).toBe(-1);
    });

    it('Returns 100 when an "AA" is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout("AA")).toBe(100);
    });

    it('Returns 60 when an "BB" is passed as argument', () => {
        shop = new Shop
        expect(shop.checkout("BB")).toBe(60);
    });

});