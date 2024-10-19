interface Person {
    name: String
    age: number
    isStudent: boolean
}

function personInfo(person: Person): string {
    return `Person with name ${person.name} is ${person.age} years old, and is${person.isStudent ? '' : ' not'} student`
}

let person: Person = {name: "Anna Smith", age: 18, isStudent: true}
let person1: Person = {name: "John Doe", age: 12, isStudent: false}

console.log(personInfo(person))
console.log(personInfo(person1))