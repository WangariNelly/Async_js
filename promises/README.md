Promise object is made up of two internal properties;
1. state -pending/fulfilled for resolved or     rejected for for reject.
2. result - undefined/value for resolve(value) or reject(error).
--- The properties state and result of the Promise object are internal. We can’t directly access them. We can use the methods .then/.catch/.finally.
