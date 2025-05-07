
const values = require('./joinStrings')

describe('follow', () => {
  test('firstName is Nikash', () => {
    expect(values.firstName).toEqual('Nikash')
  })
  test('lastName is Lamsal', () => {
    expect(values.lastName).toEqual('Lamsal')
  })
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025)
  })
  test('birthYear is 2004', () => {
    expect(values.birthYear).toEqual(2004)
  })
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Nikash Lamsal and I am 21 years old.')
  })
  test('fullName is Nikash Lamsal', () => {
    expect(values.fullName).toEqual('Nikash Lamsal')
  })
  test('age is 21', () => {
    expect(values.age).toEqual(21);
  })
})
