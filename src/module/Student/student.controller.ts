import { Request, Response } from "express";
import { StudentServices } from "./student.services";

const createStudent = async(req: Request, res:Response)=>{
   try{
    const student = req.body;
    // call service function to handle and send this data 
    const result = StudentServices.createStudentIntoDb(student)
    // send responce
    res.status(200).json({
        status:true,
        message:"created Student Successfully",
        data:result,
    })
   }
   catch(err)
   {
    console.log(err)
   }
}

export const StudentController = {
    createStudent,
}