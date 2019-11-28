const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let result = array.find(el => el.result === "W")
  return result ? result.year : undefined
}
