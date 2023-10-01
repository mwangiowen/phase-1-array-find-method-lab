// code your solution here

  function superbowlWin(record) {
    const winningYear = record.find(item => item.result === "W");
  
    if (winningYear) {
      return winningYear.year
    } else {
      return undefined
    }
  }
  

  const yearOfWin = superbowlWin(record)
  console.log(yearOfWin)
  