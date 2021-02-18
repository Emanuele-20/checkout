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

    

});