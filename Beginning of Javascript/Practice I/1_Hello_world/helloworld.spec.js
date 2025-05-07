const helloworld = require('./helloworld.js')

describe("Hello World", function(){
    test('says "Hello , World"', function(){
        expect(helloworld()).toEqual("Hello , world")
    })
})