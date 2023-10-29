const animals = ["zebra","lion","tiger","jackals"];

// Runs before testing starts
beforeAll(()=>{

})
// Runs before every test
beforeEach(()=>{

})
// Runs after every test
afterEach(()=>{

})
// Runs after all tests done
afterAll(()=>{

})

describe('testing array', () => { 

    // TO run clean ups like before or after, only for a particular suit, use it in that particular test suit

    test('element should appended', () => { 
        animals.push("elephant");
        expect(animals[animals.length-1]).toBe("elephant")
     })
 })

 describe('first', () => { 
    test('element should appended', () => { 
        animals.push("elephant");
        expect(animals[animals.length-1]).toBe("elephant")
     })
  })