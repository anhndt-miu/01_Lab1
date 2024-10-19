class Question {
    private qid: number
    private answer: string
    constructor(qid: number, answer: string) {
        this.qid = qid
        this.answer = answer
    }

    get getId(): number {
        return this.qid
    }

    get getAnswer() {
        return this.answer
    }

    checkAnswer(answer: string): boolean {
        return this.answer == answer
    }
}
class Student {
    private studentId: number
    private answers: Array<Question>
    constructor(studentId: number) {
        this.studentId = studentId
        this.answers = []
    }

    get getId(): number {
        return this.studentId
    }

    get getAnswers(): Array<Question> {
        return this.answers
    }

    addAnswer(answer: Question) {
        this.answers.push(answer)
    }

}

class Quiz {
    private questions: Map<number, string>
    private students: Array<Student>
    constructor(questions: Array<Question>, students: Array<Student>) {
        this.questions = new Map(questions.map(q => [q.getId, q.getAnswer]))
        this.students = students
    }

    scoreStudentById(id: number): number {
        let checkingStudent = this.students.find(x => x.getId == id)
        if (checkingStudent) {
            let score: number = 0
            for (const ans of checkingStudent.getAnswers) {
                let answer = this.questions.get(ans.getId)
                if (ans.checkAnswer(answer ?? "")) {
                    score++
                }
            }

            return score
        }

        return 0
    }

    getAverageScore(): number {
        let totalScore = this.students.reduce((sum, student) => sum + this.scoreStudentById(student.getId), 0)
        return this.students.length == 0 ? 0 : totalScore / this.students.length
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

let scoreforStudent10 = quiz.scoreStudentById(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentById(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
