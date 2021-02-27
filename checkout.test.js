const Shop = require('./checkout')


describe("Checkout" , () => {
    test("Return -1 if the argument passed is not fully capitalize", () => {
        shop = new Shop()
        expect(shop.checkout('aBc')).toBe(-1)
    })

    test("Return -1 if the argument passed contain invalid digits", () => {
        shop = new Shop()
        expect(shop.checkout('-B8x')).toEqual(-1)
    })

    test("Return -1 if the argument passed is a number", () => {
        shop = new Shop()
        expect(shop.checkout(8)).toEqual(-1)
    })

    test("Return 100 if 'AA' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("AA")).toEqual(100)
    })

    test("Return 115 if 'ABCD' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("ABCD")).toEqual(115)
    })
})

describe("Special Offer", () => {
    it("Return 130 when 'AAA' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("AAA")).toEqual(130)
    })
    it("Return 260 when 'AAAAAA' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("AAAAAA")).toEqual(260)
    })
    it("Return 180 when 'AAAA' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("AAAA")).toEqual(180)
    })
    it("Return 230 when 'AAAAA' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("AAAAA")).toEqual(230)
    })
    it("Return 45 instead of 60  when 'BB' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("BB")).toEqual(45)
    })
    it("Return 75 'BBB' is passed", () => {
        shop = new Shop()
        expect(shop.checkout("BBB")).toEqual(75)
    })
})