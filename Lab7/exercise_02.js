var isPrime = function (n) {
    return new Promise(function (resolve, reject) {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0)
                reject("{ prime: false }");
        resolve("{ prime: true }");
    })
}

console.log('start');

/// Update IIFE
(async () => {
    try {
        let res = await isPrime(7)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
})();

console.log('end');
// start
// end
// { prime: true }
