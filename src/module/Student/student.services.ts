import mongoose from "mongoose";
import { TStudent } from "./student.interface"
import { student } from "./student.model"

const createStudentIntoDb = async(studentData: TStudent) =>
{
// we always run query on the model so we need to import the model of thre student and run a query on that 
console.log("services",student)
// const result = await student.create(studentData)
// const student1 = new student(studentData)
if(await student.isUserExist(studentData.idx))
    {
      return  new Error;  
    }
    else{
       const result = await student.create(studentData)
       return result
    }
   
}

const getAllStudens = async () =>{
    const result = await student.find();
    return result;
}


const findOneStudent = async (id: string) =>{
// const result =await student.findOne({_id:id})
console.log(id)
const objectId = new mongoose.Types.ObjectId(id)
const result = await student.aggregate([
    {
      $match:{_id :objectId}
    }
  ])
 
return result;
}



 const deleteOneFromTheDatabase = async (id:string)=>
 {
    console.log("the deleting id", id)
    const result = student.updateOne({_id: id}, {isDeleted : true})
    return result;
 }

export const StudentServices = {
    createStudentIntoDb,
    getAllStudens,
    findOneStudent,
    deleteOneFromTheDatabase
}