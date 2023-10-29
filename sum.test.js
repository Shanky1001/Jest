// import { sum } from "./sum";
const {sum} = require("./sum")

test('Check basic sum', () => { 
    const res = sum(2,3);
    expect(res).toBe(5)
 })