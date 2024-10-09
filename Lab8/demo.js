setTimeout(() => {
    console.log('timeout');
}, 1);

setImmediate(() => {
    console.log('immediate');
});

// process.nextTick(() => console.log('nexttick'));