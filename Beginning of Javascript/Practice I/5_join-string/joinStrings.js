const firstName = "Nikash"
const lastName = "Lamsal"
const fullName = `${firstName} ${lastName}`
const thisYear = 2025
const birthYear = 2004
const age = thisYear - birthYear
const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`

module.exports = {
    firstName: typeof firstName === 'undefined' ? undefined : firstName,
    lastName: typeof lastName === 'undefined' ? undefined : lastName,
    thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
    birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
    greeting: typeof greeting === 'undefined' ? undefined : greeting,
    fullName: typeof fullName === 'undefined' ? undefined : fullName,
    age: typeof age === 'undefined' ? undefined : age
  }