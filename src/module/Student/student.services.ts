import { Student } from "./student.interface"
import { studentModel } from "./student.model"

const createStudentIntoDb = async(student: Student) =>
{
// we always run query on the model so we need to import the model of thre student and run a query on that 
const result = await studentModel.create(student)
return result;
}

const getAllStudens = async () =>{
    const result = await studentModel.find();
    return result;
}

const findOneStudent = async (id: string) =>{
const result =await studentModel.findOne({_id:id})
return result;
}

export const StudentServices = {
    createStudentIntoDb,
    getAllStudens,
    findOneStudent
}