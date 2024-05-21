//we will handle all the routes here
import express from "express"
import { StudentController } from "./student.controller"

// now take route from the express remember that route is an object  so......(check the exporting) 
const router = express.Router()

// will call controller
// request => /api/v1/students/create-student ....suppose
 // /create-student ....section will be checked here
router.post("/create_student", StudentController.createStudent)
router.get("/all_students",StudentController.getAllStudent)
router.get("/findOne/:id", StudentController.findOneStudent)

// we no need to export as object as "route" its seff is avbn ovbject . we export it directly
export const Studentroute = router;