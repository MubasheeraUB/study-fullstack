const promise1 = new Promise((resolve, reject) => {
    // reject("API Failed") ;
    resolve(["JavaScript", "Python", "Java"]) ;
}) ;

// promise1
//     .then((response) => {
//         console.log(response.flat()) ;
//     }).catch((error) => {
//         console.log(error);
//     }) ;

const fetchData = async () => {
    try {
        const response = await promise1 ;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

fetchData();

/* IIFE
(async () => {
    const response = await promise1 ;
    console.log(response);
})()
    */