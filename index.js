const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(array) {
  let result = array.find(row => row["result"] === "W");
  return !!result ? result["year"] : undefined;
}
