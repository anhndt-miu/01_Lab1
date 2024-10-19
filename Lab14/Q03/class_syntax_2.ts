class Animal {
    name: string
    speed: number
    constructor(name: string, speed: number) {
        this.name = name
        this.speed = speed
    }

    run(speed: number = 0) {
        this.speed += speed
        console.log(`${this.name} run with speed ${this.speed}`)
    }

    static compareBySpeed(a: Animal, b: Animal) {
        return a.speed - b.speed
    }
}

class Rabbit extends Animal {
    constructor(name: string, speed: number) {
        super(name, speed)
    }

    hide() {
        console.log(`${this.name} hides`)
    }
}

let rabbit1 = new Rabbit("Pink Rabbit", 10)
let rabbit2 = new Rabbit("Rainbow Rabbit", 8)
let rabbit3 = new Rabbit("Green Rabbit", 8)
rabbit3.run(4)

let rabbits = [rabbit1, rabbit2, rabbit3]
rabbits.sort(Rabbit.compareBySpeed)
console.log(rabbits)
rabbits.forEach(x => x.run())