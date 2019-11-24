const testVar = {}

function testFunc() {
  return "hi"
}




function superbowlWin(record){
  let result = record.find( bowl => bowl.result ==="W" )
  return !!result ? result.year : undefined
}

superBowlWin()