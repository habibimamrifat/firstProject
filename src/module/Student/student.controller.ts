import { Request, Response } from "express";
import { StudentServices } from "./student.services";
import studentJoiValidationSchema from "./student.Joivalidation";

const createStudent = async (req: Request, res: Response) => {
  // as data comes here we need to validate the data here we need to create joy object and validate the inpute
  const { student: studentData } = req.body;

  const {error, value}=studentJoiValidationSchema.validate(studentData)
  console.log({error}, {value})
  if(error)
    {
        res.status(200).json({
            ststus: false,
            message: "something went wrong",
            body: error,
          });  
    }
    else
    {
        try {
           
            // call service function to handle and send this data
            const result = await StudentServices.createStudentIntoDb(value);
            // send responce
            res.status(200).json({
              status: true,
              message: "created Student Successfully",
              data: result,
            });
          } catch (err) {
            res.status(200).json({
              ststus: false,
              message: "something went wrong",
              body: err,
            });
          }
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
    const result = await StudentServices.findOneStudent(id);

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
export const StudentController = {
  createStudent,
  getAllStudent,
  findOneStudent,
};
