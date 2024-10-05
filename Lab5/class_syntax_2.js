class Animal {
    name
    speed

    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    run(speed = 0) {
        this.speed + speed
        console.log(`${this.name} run with speed ${this.speed}`)
    }

    static compareBySpeed(a1, a2) {
        return a1.speed - a2.speed
    }
}

class Rabbit extends Animal {
    constructor(name, speed) {
        super(name, speed);
    }

    hide() {
        console.log(`${this.name} hides`)
    }
}

let rabbits = [new Rabbit("Pink Rabbit", 10), new Rabbit("Rainbow Rabbit", 8)]
rabbits.sort(Rabbit.compareBySpeed)
console.log(rabbits)
rabbits.forEach(x => x.run())