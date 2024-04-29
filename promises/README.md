Promise object is made up of two internal properties;
1. state -pending/fulfilled for resolved or     rejected for for reject.
2. result - undefined/value for resolve(value) or reject(error).
--- The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally.
## Methods that handle promises;
.then: 
Handles the resolved value (data) if the promise is fulfilled successfully. It also allows you to return a new value to be passed to the next .then in the chain.

.catch: 
Handles any errors that occur during the promise execution. It catches errors thrown by previous .then callbacks or the promise itself.

finally:
 Executes cleanup actions, such as closing resources or releasing locks, regardless of whether the promise was fulfilled or rejected.