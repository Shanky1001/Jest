// import { sum } from "./sum";
const { sum } = require("./sum")

describe('Testing Sum function with numbers', () => {
    test('Check basic sum', () => {
        const res = sum(2, 3);
        expect(res).toBe(5)
    })
    //  To equal Matcher
    test("object Assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
    // Truthy and falsy matcher
    test("Truthy or falsy", () => {
        // const val = undefined;
        // expect(val).toBeFalsy()
        const val = 45;
        expect(val).toBeTruthy()
    })

    // Less than or greater than matcher
    test("Truthy or falsy", () => {
        const val = sum(47, 45);
        expect(val).toBeGreaterThan(50)
        expect(val).toBeLessThan(100)
    })
})
