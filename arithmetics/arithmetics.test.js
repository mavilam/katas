const {arithmetics} = require("./arithmetics")

describe('FizzBuzz tests', () => {
  test.each([
    ["( 1 + 1 + -2 )", 0],
    ["( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )", 101],
    ["( 5 * ( 4 * ( 3 * ( 2 * ( 1 * 9 ) / 8 - 7 ) + 6 ) ) )", -165],
    ["3 + ( 2 * 1 )", "Invalid input"],
  ])('input %p should return %p', (input, expected) => {
    expect(arithmetics(input)).toEqual(expected)
  })
})
