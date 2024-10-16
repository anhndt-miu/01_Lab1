import Student from "../model/student.js"

const studentController = {
    getStudents: (req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            return res.status(200).json(Student.getAllStudents())
        }
        next()
    },

    getStudentByQueryString: (req, res, next) => {
        const {sort, order = 'asc', program} = req.query
        if (sort && program) {
            let students = Student.sortByIdAndProgram('id', order === 'asc' ? 1 : -1, program)
            res.status(200).json(students)
        } else if (fieldName) {
            let students = Student.sortBy(sort, order === 'asc' ? 1 : -1)
            res.status(200).json(students)
        } else if (program) {
            let students = Student.sortBy('program', order === 'asc' ? 1 : -1)
            res.status(200).json(students)
        } else res.status(200).json(Student.getAllStudents())
    },

    createStudent: (req, res, next) => {
    },
    getStudentById: (req, res, next) => {
        const id = req.params.id
        if (id) {
            const student = Student.getStudentById(id * 1)
            if (student) {
                res.status(200).json(student)
            } else {
                res.status(400).json({message: "Student not found"})
            }
        } else {
            res.status(400).json({message: "Provide student id"})
        }
    },
    updateStudentById: (req, res, next) => {
        const id = req.params.id
        const {name, program} = req.body
        if (id && name && program) {
            const student = new Student(id * 1, name, program)
            if (student.updateStudent()) {
                res.status(200).json(student)
            } else {
                res.status(400).json({message: "student not found"});
            }
        } else {
            res.status(400).json({message: "Provide all information"})
        }
    },
    deleteStudentById: (req, res, next) => {
        const id = req.params.id
        if (id) {
            const student = Student.deleteStudent(id)
            if (student){
                res.status(200).json({message:"Delete successed"})
            }else{
                res.status(400).json({message:"Delete failure"})
            }
        } else {
            res.status(400).json({message: "Provide student id"})
        }
    },
}

export default studentController;