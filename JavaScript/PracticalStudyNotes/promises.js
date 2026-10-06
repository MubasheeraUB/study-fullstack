function getDataFromAPI(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num) ;
    }, 2000) ;
  }) ;
}

function getDataFromAPI2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num) ;
    }, 2000) ;
  }) ;
}

getDataFromAPI(5)
    .then((response) => {
        return getDataFromAPI2(response + 5) ;
    })
    .then((response) => {
        console.log(response) ;
    }) ;