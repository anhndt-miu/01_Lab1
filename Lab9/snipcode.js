import fs from "fs";

process.nextTick(() => console.log('nextTick 1')); // 2. Process.nextTick
Promise.resolve().then(() => console.log('promise 1')); // 1. Promise queue
setImmediate(() => {
    console.log('setImmediate 1') // 3. Loop
});

setTimeout(() => console.log('setTimeout 1'), 0); // 4. Loop
fs.readFile('./files/input.txt', "utf-8", (err, data) => {
    if (err)
        console.log('there is an error. can not read from file'); // 5. Read error
    else {
        console.log(data); // 5. Read sucess
    }
});


