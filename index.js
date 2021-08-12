function superbowlWin(array) {
  function findWin(element) {
    return (element.result === "W");
  }
  const found = array.find(findWin);
  return found ? found.year : undefined;
}