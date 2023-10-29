const { fetchData } = require("./async");

describe('Test todo async function', () => {
    it("id should match", () => {
        fetchData(2).then((data) => {
            expect(data.id).toBe(2)
        })
    })
    it("id should match", async () => {
        const data = await fetchData(50)
        expect(data.id).toBe(50)
    })
})