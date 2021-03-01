const Shop = require('./checkout')

beforeEach(() => {
    shop = new Shop();
})

describe("Checkout" , () => {
    test("Return -1 if the argument passed is not fully capitalize", () => {
        expect(shop.checkout('aBc')).toBe(-1)
    })

    test("Return -1 if the argument passed contain invalid digits", () => {
        expect(shop.checkout('-B8x')).toEqual(-1)
    })

    test("Return -1 if the argument passed is a number", () => {
        expect(shop.checkout(8)).toEqual(-1)
    })

    test("Return 100 if 'AA' is passed", () => {
        expect(shop.checkout("AA")).toEqual(100)
    })

    test("Return 115 if 'ABCD' is passed", () => {
        expect(shop.checkout("ABCD")).toEqual(115)
    })
})

describe("Special Offer", () => {
    it("Return 130 when 'AAA' is passed", () => {
        expect(shop.checkout("AAA")).toEqual(130)
    })
    it("Return 260 when 'AAAAAA' is passed", () => {
        expect(shop.checkout("AAAAAA")).toEqual(260)
    })
    it("Return 180 when 'AAAA' is passed", () => {
        expect(shop.checkout("AAAA")).toEqual(180)
    })
    it("Return 230 when 'AAAAA' is passed", () => {
        expect(shop.checkout("AAAAA")).toEqual(230)
    })
    it("Return 45 instead of 60  when 'BB' is passed", () => {
        expect(shop.checkout("BB")).toEqual(45)
    })
    it("Return 75 'BBB' is passed", () => {
        expect(shop.checkout("BBB")).toEqual(75)
    })
})