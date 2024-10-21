const operations = {
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b
}

function arithmetics(operation) {
  if (!operation.startsWith("(") || !operation.endsWith(")"))
    return 'Invalid input'
  
  return calculate(operation.split(" "))[0]
}

function calculate(operation) {
  var openParenthesis = operation.lastIndexOf("(")
  if (openParenthesis != -1) {
    closeParenthesis = operation.indexOf(")", openParenthesis)
    var innerOperation = operation.slice(openParenthesis + 1, closeParenthesis)
    var result = solveOperation(innerOperation)
    operation.splice(openParenthesis, (closeParenthesis - openParenthesis) + 1, result)
    return calculate(operation)
  }
  return elements
}

function solveOperation(operation) {
  for (let op in operations) {
    var multiplyPos = operation.indexOf(op)
    while (multiplyPos != -1) {
      var result = operations[op](Number(operation[multiplyPos - 1]), Number(operation[multiplyPos + 1]))
      operation.splice(multiplyPos - 1, 3, result)
      var multiplyPos = operation.indexOf(op)
    }
  }
  return operation[0]
}

module.exports = {arithmetics}
