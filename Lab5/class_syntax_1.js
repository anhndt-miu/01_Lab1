
///----------------------------------------------------------////
class Student {
    #studentId
    #answers

    constructor(id) {
        this.#studentId = id
        this.#answers = []
    }

    get studentId() {
        return this.#studentId
    }

    get answers() {
        return this.#answers
    }

    addAnswer(question) {
        this.#answers.push(question)
    }
}

class Question {
    #qid
    #answer

    constructor(id, answer) {
        this.#qid = id
        this.#answer = answer
    }

    get qid() {
        return this.#qid
    }

    get answer() {
        return this.#answer
    }

    checkAnswer(answer) {
        return this.#answer == answer
    }
}

class Quiz {
    #questions
    #students

    constructor(questions, students) {
        this.#questions = new Map(questions.map(q => [q.qid, q.answer]))
        this.#students = students
    }

    scoreStudentBySid(sid) {
        let checkingStudent = this.#students.find(stu => stu.studentId == sid)
        // let score = 0
        // for (let answer of checkingStudent.answers) {
        //     let correctAnswer = this.#questions.get(answer.qid)
        //     if (answer.checkAnswer(correctAnswer)) {
        //         score++
        //     }
        // }

        return checkingStudent.answers.reduce((score, ans) => score + ans.checkAnswer(this.#questions.get(ans.qid)), 0)
    }

    getAverageScore() {
        let totalScore = this.#students.reduce((sum, stu) => sum + this.scoreStudentBySid(stu.studentId), 0)
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