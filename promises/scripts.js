// Create a promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = 4 + 4;
        resolve(result);
    }, 1000); 
});
//  promise result with .then
promise.then(
    // The first argument of .then is a function that handles the resolved value
    result => {
        console.log('Result:', result);
    })

     .catch((error) =>{
    // The second argument of .then is a function that handles any errors
        console.error('Error:', error.message); 
        throw new Error("Failed to log results: " + Error.message);
})
   .finally(() => {
    console.log("Code executed!");
});