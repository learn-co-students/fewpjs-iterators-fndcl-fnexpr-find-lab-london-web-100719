function superbowlWin(recordArray) {
  let record = recordArray.find(record => record.result === "W");
  return !!record ? record.year : undefined;
}