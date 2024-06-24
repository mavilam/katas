function fizzbuzz(n) {
  if (typeof n !== 'number' || n <= 0)
    return 'Invalid input'

  const results = []
  for (let input = 1; input <= n; input++) {
    var result = ""
    if (input % 3 === 0) result += 'Fizz'
    if (input % 5 === 0) result += 'Buzz'
    
    results.push(result || input.toString())
  }
  return results
}

module.exports = {fizzbuzz}
