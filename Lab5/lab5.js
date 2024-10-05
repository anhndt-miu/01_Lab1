// "use strict"
let str = "Greetings, ";
let user = {
    firstName: "John",
    lastname: "Smith",
    display: function () {
        console.log(str, this.firstName);
        show("hi");
    }
};

user.display();

function show(msg) {
    // For use strict
    // console.log(msg + " " + this?.lastname);
    console.log(msg + " " + this.lastname);
}

show.call(user, "hello");

///----------------------------------------------------------////
class Student {
    #id
    #answer

    constructor(id) {
        this.#id = id
        this.#answer = []
    }

    get id() {
        return this.#id
    }

    get answer() {
        return this.#answer
    }

    addAnswer(question) {
        this.#answer.push(question)
    }
}

class Question {
    #id
    #answer

    constructor(id, answer) {
        this.#id = id
        this.#answer = answer
    }

    get id() {
        return this.#id
    }

    get answer() {
        return this.#answer
    }

    checkAnswer(answer) {
        this.#answer = answer
    }
}

class Quiz {
    #questions
    #students

    constructor(questions, students) {
        this.#questions = new Map()
        for (let question of questions) {
            this.#questions.set(question.id, question.answer)
        }

        this.#students = students
    }

    scoreStudentBySid(sid) {
        let student = this.#students.find(stu => stu.id == sid)
        var score = 0
        for (let answer of student.answer) {
            if (this.#questions.get(answer.id) == answer.answer) {
                score++
            }
        }

        return score
    }

    getAverageScore() {
        var totalScore = 0
        for (let student of this.#students) {
            totalScore += this.scoreStudentBySid(student.id)
        }

        if (this.#students.length <= 0) {
            return 0
        }

        return totalScore / this.#students.length
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5