function getCandy() {
  return new Promise((resolve, reject) => {
    let dinnerFinished = true;
    if (dinnerFinished) {
      resolve("Here’s your candy!");
    } else {
      reject("No candy until dinner!");
    }
  });
}

getCandy()
  .then(candy => console.log(candy))   // "Here’s your candy!"
  .catch(error => console.log(error));