import {Calculator} from './calculator';

function operation(): void {
    let calc = new Calculator()
    console.log(calc.add(2, 3))
    console.log(calc.subtract(2, 3))
    console.log(calc.multiply(2, 3))
    console.log(calc.divide(2, 3))
}

operation()