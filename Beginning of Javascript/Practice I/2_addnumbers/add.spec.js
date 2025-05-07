const addnumbers = require('./add')

describe('addnumbers',() => {
    test('adds the number together',() => {
        expect(addnumbers()).toEqual(2)
    })
})