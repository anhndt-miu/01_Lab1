// • Function Declaration function foo(){}
// • Function Expression const foo = function(){}
// • Arrow Function const foo = ()=>{}

"use strict";
// -------------------------- 1.a --------------------------
// Function Declaration
function computeSumOfSquares(arrs = [1, 2, 3]) {
    return arrs.reduce((pValue, cValue) => pValue + cValue * cValue, 0);
}

console.log(`1.a.1: ${computeSumOfSquares()}`)

// Function Expression
const computeSumOfSquare1 = function (arr = [1, 2, 3]) {
    return arr.reduce((pValue, cValue) => pValue + cValue * cValue, 0);
}
console.log(`1.a.2: ${computeSumOfSquare1()}`)

// // Arrow Function
const computeSumOfSquare2 = (arr = [1, 2, 3]) => arr.reduce((pValue, cValue) => pValue + cValue * cValue, 0);
console.log(`1.a.3: ${computeSumOfSquare2()}`)

// -------------------------- 1.b --------------------------
// Function Declaration

console.log(`1.b.1:`)

function printOddNumbersOnly(arr = [1, 2, 3]) {
    return arr.filter((item) => item % 2 != 0)
        .forEach((index, item, array) => console.log(`>>> Item ${item} at index ${index} is odd number`));
}

printOddNumbersOnly()


// Function Expression
console.log(`1.b.2`)
const printOddNumbersOnly1 = function (arr = [1, 2, 3]) {
    return arr.filter((item) => item % 2 != 0).forEach((index, item, array) => console.log(`>>> Item ${item} at index ${index} is odd number`));
}
printOddNumbersOnly1()

// // Arrow Function
console.log(`1.b.3:`)
const printOddNumbersOnly2 = (arr = [1, 2, 3]) => arr.filter((item) => item % 2 != 0).forEach((index, item, array) => console.log(`>>> Item ${item} at index ${index} is odd number`));

printOddNumbersOnly2();

// -------------------------- 1.c --------------------------
// Function Declaration
console.log(`1.c.1:`)

function printFibo(n, a, b) {
    let arr =[];
    let next = 0;
    for (let i = 0; i < n; i++) {
        arr.push(a)
        next = a + b;
        a = b;
        b = next;
    }

    console.log(arr)
}

printFibo(1, 0, 1)
printFibo(2, 0, 1)
printFibo(3, 0, 1)
printFibo(6, 0, 1)
printFibo(10, 0, 1)

// // Function Expression
console.log(`1.c.2:`)
const printFibo1 = function (n,a,b) {
    let arr =[];
    let next = 0;
    for (let i = 0; i < n; i++) {
        arr.push(a)
        next = a + b;
        a = b;
        b = next;
    }

    console.log(arr)
}

printFibo1(1, 0, 1)
printFibo1(2, 0, 1)
printFibo1(3, 0, 1)
printFibo1(6, 0, 1)
printFibo1(10, 0, 1)

// // Arrow Function
console.log(`1.c.3:`)
const printFibo2 = (n, a, b) => {
    let arr =[];
    let next = 0;
    for (let i = 0; i < n; i++) {
        arr.push(a)
        next = a + b;
        a = b;
        b = next;
    }

    console.log(arr)
};

printFibo2(1, 0, 1)
printFibo2(2, 0, 1)
printFibo2(3, 0, 1)
printFibo2(6, 0, 1)
printFibo2(10, 0, 1)