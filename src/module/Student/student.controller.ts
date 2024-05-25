import { Request, Response } from "express";
import { StudentServices } from "./student.services";
import studentValidationSchema from "./student.validation";
import { student } from "./student.model";


const createStudent = async (req: Request, res: Response) => {
 
  const { student: studentData } = req.body;

  const studentZodParsed =studentValidationSchema.parse(studentData);
    // console.log("yooooo", studentZodParsed)

  try {
   
    const result = await StudentServices.createStudentIntoDb(studentZodParsed);
    //  console.log("zzzzzzzzzzzz",result)
    // Send response
    res.status(200).json({
      status: true,
      message: "Created student successfully",
      data: result,
    });

  } catch (err) {
    
      // Handle validation errors
      res.status(400).json({
        status: false,
        message: "Validation Error",
        body:err
      });

    }
  
  // rest of the codes here
  
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudens();
    res.status(200).json({
      ststus: true,
      message: "all students here",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const findOneStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.findOneStudent(id)

    res.status(200).json({
      ststus: true,
      message: "sucessfully found a student",
      body: result,
    });
  } catch (err) {
    res.status(200).json({
      ststus: false,
      message: "something went wrong",
      body: err,
    });
  }
};

const deleteOneFromtheDatabase = async (req:Request, res:Response)=>{
  const id = req.params.id;
  console.log("controller", id)

  try{
    const result =await StudentServices.deleteOneFromTheDatabase(id)
    res.status(200).json({
      ststus: true,
      message: "sucessfully deleted a student",
      body: result,
    });
  }
  catch(err){
    res.status(400).json({
      ststus: false,
      message: "something went wrong",
      body: err,
    });
  }
}
export const StudentController = {
  createStudent,
  getAllStudent,
  findOneStudent,
  deleteOneFromtheDatabase
};
