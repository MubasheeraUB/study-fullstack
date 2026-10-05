// An async function automatically returns a Promise
async function getCandy() {
  let dinnerFinished = false; // change to false to test rejection

  if (dinnerFinished) {
    return "Here’s your candy!"; // resolved value
  } else {
    throw "No candy until dinner!"; // rejected value
  }
}

async function askForCandy() {
  try {
    let candy = await getCandy(); 
    console.log(candy); // "Here’s your candy!"
  } catch (error) {
    console.log(error); // "No candy until dinner!"
  }
}

askForCandy();

