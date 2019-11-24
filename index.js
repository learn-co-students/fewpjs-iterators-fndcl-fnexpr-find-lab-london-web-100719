function superbowlWin(record) {
  let performance = record.find(record => record.result === "W");
  return !!performance ? performance.year : undefined;
}
