const students = [
    {id: 119168, name: " Jenifer Lopex", program: "MBA"},
    {id: 119169, name: " Anna Smith", program: "Compro"},
    {id: 119167, name: " John Doe", program: "Bachelor"},
    {id: 119166, name: " Davien Rice", program: "MBA"}
]

export default class Student {
    constructor(id, name, program) {
        this.id = id
        this.name = name
        this.program = program
    }

    static getAllStudents() {
        return structuredClone(students);
    }

    static getStudentByQueryString() {
        return students;
    }

    static getStudentById(id) {
        return students.find((e) => e.id === id)
    }

    createStudent() {
        let checkingStudent = this.#getStudentById(this.id)
        if (!checkingStudent) {
            students.push(this)
            return this
        }
    }

    updateStudent() {
        let checkingStudentIndex = this.#findIndexOfStudentById(this.id)
        if (checkingStudentIndex != -1) {
            return students[checkingStudentIndex] = this
        }
    }

    static deleteStudent(id) {
        let checkingStudentIndex = students.findIndex((e) => e.id == id)
        if (checkingStudentIndex != -1) {
            return students.splice(checkingStudentIndex, 1)
        }
    }

    #getStudentById(id) {
        return students.find((e) => e.id === id)
    }

    #findIndexOfStudentById(id) {
        return students.findIndex((e) => e.id === id)
    }

    static sortBy(field, order) {
        return Student.getAllStudents().sort((e1, e2) =>
            (typeof e1[field] === 'number') ? order * (e1[field] - e2[field]) : order * e1[field].localeCompare(e2[field])
        )
    }

    static sortByIdAndProgram(id, order, program) {
        return Student.getAllStudents().sort((e1, e2) => {
                if (e1.program !== e2.program) {
                    return order * e1.program.localeCompare(e2.program)
                }

                return order * (e1.id - e2.id)
            }
        )
    }

}