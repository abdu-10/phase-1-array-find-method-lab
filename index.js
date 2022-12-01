function superbowlWin(block) {
  function isWin(element) {
      return (element["result"] === "W");
  }

  if (block.find(isWin)) {
      return block.find(isWin)["year"];
  } else {
      return undefined;
  }
}












