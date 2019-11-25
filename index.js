function superbowlWin(array){
const obj = array.find(record => record.result === "W")
if (obj) {return obj.year}
}