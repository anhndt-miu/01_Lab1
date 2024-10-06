// Create all Object
function Student(studentId) {
    this.studentId = studentId
    this.answers = []
}

function Question(qid, answer) {
    this.qid = qid
    this.answer = answer
}

function Quiz(questions, students) {
    this.questions = new Map(questions.map(q => [q.qid, q.answer]))
    this.students = students
}

// Set Prototype
Object.setPrototypeOf(Student.prototype, Question.prototype, Quiz.prototype)

// Define functions
Student.prototype.studentId = function () {
    return this.studentId
}

Student.prototype.answers = function () {
    return this.answers
}

Student.prototype.addAnswer = function (question) {
    this.answers.push(question)
}

Question.prototype.qid = function () {
    return this.qid
}

Question.prototype.answer = function () {
    return this.answer
}

Question.prototype.checkAnswer = function (answer) {
    return this.answer == answer
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    let checkingStudent = this.students.find(stu => stu.studentId == sid)
    return checkingStudent.answers.reduce((score, ans) => score + ans.checkAnswer(this.questions.get(ans.qid)), 0)
}

Quiz.prototype.getAverageScore = function () {
    let totalScore = this.students.reduce((sum, stu) => sum + this.scoreStudentBySid(stu.studentId), 0)
    if (this.students.length <= 0) {
        return 0
    }

    return totalScore / this.students.length
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