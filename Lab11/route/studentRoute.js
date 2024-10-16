import studentController from "../controller/studentController.js"
import express from "express"

const router = express.Router()

router.route('/')
    .get(studentController.getStudents, studentController.getStudentByQueryString)
    .post(express.json(), studentController.createStudent)

router.route('/:id')
    .get(studentController.getStudentById)
    .put(express.json(), studentController.updateStudentById)
    .delete(express.json(), studentController.deleteStudentById)

export default router