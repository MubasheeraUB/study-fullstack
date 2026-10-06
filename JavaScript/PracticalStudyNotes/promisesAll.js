const promise1 = new Promise((resolve, reject) => {
    reject("API Failed") ;
    // reject(["JavaScript", "Python", "Java"]) ;
}) ;

const promise2 = new Promise((resolve, reject) => {
    // resolve(["React", "Angular", "Vue"]) ; 
    reject("API Failed") ;
}) ;

const allPromises = Promise.all([promise1, promise2]) ;

allPromises.then((response) => {
    console.log(response.flat()) ;
}).catch((error) => {
    console.log(error);
}) ;