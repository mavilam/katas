const fs = require('fs')

const objectTypesFilters = {
  "🪅": modifyPinataRange,
  "🍬": modifyAbjacentRange,
  "💥": modifyAbjacentRange
}

const objectTypesEffects = {
  "🪅": "🌈",
  "🍬": "🌈",
  "💥": "💀"
}

const actionables = ["🪅", "🍬", "💥"]

async function main() {
  fs.readFile('input.txt', (err, data) => {
    if (err) throw err
    const start = performance.now()

    const input = data.toString()
    const lines = input.split("\n")
    const rawMap = lines.map(l => l.split(" "))
    console.log("ORIGINAL MAP")
    printMap(rawMap)
    const finalMap = composeMap(rawMap)
    const end = performance.now();
    const duration = end - start;
    console.log(`Tme: ${duration} ms`);
    console.log("CALCULATED MAP")
    printMap(finalMap)
  })
}

function composeMap(rawMap) {
  const size = {x: rawMap[0].length, y: rawMap.length}
  for (let y = 0; y < rawMap.length; y++) {
    let row = rawMap[y]
    for (let x = 0; x < row.length; x++) {
      modifyMap(rawMap, x, y, size)
    }
  }
  return rawMap
}

function modifyMap(rawMap, x, y, size) {
  const icon = rawMap[y][x]
  if (actionables.includes(icon)) objectTypesFilters[icon](rawMap, x, y, icon, size)
}

function modifyAbjacentRange(rawMap, x, y, icon, size) {
  for (let i = -1; i <= 1; i = i+2) {
    if (x+i >= 0 && isInsideMap(size, x+i, y)) calculateIcon(icon, rawMap, x+i, y)
    if (y+i >= 0 && isInsideMap(size, x, y+i)) calculateIcon(icon, rawMap, x, y+i)
  }
}

function modifyPinataRange(rawMap, x, y, icon, size) {
  const nearbyPoints = []
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let calcX = x+j
      let calcY = y+i
      if ((calcX >= 0 && calcY >= 0) 
        && !(calcX === x && calcY === y)
        && isInsideMap(size, calcX, calcY)
      )
        calculateIcon(icon, rawMap, calcX, calcY)
    }
  }
  return nearbyPoints
}

function calculateIcon(icon, rawMap, x, y) {
  const rawIcon = rawMap[y][x]
  if (rawIcon == "🎃" || rawIcon == "🌈") rawMap[y][x] = objectTypesEffects[icon]
}

function isInsideMap(size, x, y) {
  return x < size.x && y < size.y
}

function printMap(map) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      process.stdout.write(`${map[i][j]} `)
    }
    process.stdout.write("\n")
  }
}

main()
