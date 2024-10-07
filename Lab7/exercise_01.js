// class Meditation {
//     #time
//
//     constructor(time) {
//         this.#time = time
//     }
//
//     start() {
//         let timer = setInterval(() => {
//             console.log(this.#time)
//             this.#time -= 1
//         }, 1000)
//
//         setTimeout(() => {
//             console.log(this.#time)
//             console.log("Jay Guru Dev")
//             clearInterval(timer)
//         }, this.#time * 1000)
//     }
// }

// Create Meditation Object
function Meditation(counter) {
    this.counter = counter
}

// Set Prototype
// Object.setPrototypeOf(Meditation.prototype)

// Function
Meditation.prototype.start = function () {
 let timer =   setInterval(() => {
        if (this.counter > 0) {
            console.log(this.counter)
            this.counter -= 1
        } else {
            clearInterval(timer)
            console.log("Jay Guru Dev")
        }
    }, 1000)
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);