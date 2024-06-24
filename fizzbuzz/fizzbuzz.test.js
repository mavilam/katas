const {fizzbuzz} = require("./fizzbuzz")

describe('FizzBuzz tests', () => {
  test.each([
    [3, ['1', '2', 'Fizz']],
    [5, ['1', '2', 'Fizz', '4', 'Buzz']],
    [15, ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']],
    [1, ['1']],
    [2, ['1', '2']],
    [-1, 'Invalid input'],
    [0, 'Invalid input'],
    ['5', 'Invalid input'],
    [null, 'Invalid input'],
    [undefined, 'Invalid input'],
    [[], 'Invalid input'],
    [{}, 'Invalid input']
  ])('input %p should return %p', (input, expected) => {
    expect(fizzbuzz(input)).toEqual(expected)
  })
})
