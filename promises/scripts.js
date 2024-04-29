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
    },
    // The second argument of .then is a function that handles any errors
    error => {
        console.error('Error:', error); 
    }
);
