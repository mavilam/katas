const {move} = require("./simpleMarsRover")

describe('FizzBuzz tests', () => {
  test.each([
    ['M', '0:1:N'],
    ['RMMLM', '2:1:N'],
    ['MMRMMLM', '2:3:N']
  ])('input %p should return %p', (input, expected) => {
    expect(move(input)).toEqual(expected)
  })
})
