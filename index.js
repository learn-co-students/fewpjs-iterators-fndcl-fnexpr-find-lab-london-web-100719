function superbowlWin(array){
const obj = array.find(record => record.result === "W")
return obj.year
}