const directionsMap = {
  'R':
    {
      'N': 'E',
      'E': 'S',
      'S': 'W',
      'W': 'N'
    },
  'L':
    {
      'N': 'W',
      'E': 'N',
      'S': 'E',
      'W': 'S'
    }
}

const movementsCatalog = {
  'N': (coors) => { coors.y == 9 ? coors.y = 0 : coors.y++ },
  'S': (coors) => { coors.y == 0 ? coors.y = 9 : coors.y-- },
  'E': (coors) => { coors.x == 9 ? coors.x = 0 : coors.x++ },
  'W': (coors) => { coors.x == 0 ? coors.x = 9 : coors.x-- }
}


const possibleInputs = ['M', 'L', 'R']

function move(n) {
  var coors = {'x': 0, 'y': 0}
  var direction = 'N'

  n.split('').forEach((char) => {
    if (!possibleInputs.includes(char)) {
      console.log("Error: Invalid input");
      return;
    }
    
    if (char == 'M') {
      movementsCatalog[direction](coors)
    } else {
      direction = directionsMap[char][direction]
    }
  })
  return `${coors.x}:${coors.y}:${direction}`
}

module.exports = {move}
