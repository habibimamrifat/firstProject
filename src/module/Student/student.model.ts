import { Schema, model } from "mongoose";
import { Gurdian, Student, localGirdian } from "./student.interface";

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGurdianSchema = new Schema<localGirdian>({
  name: { type: String },
  contactNo: { type: String },
  occupation: { type: String },
});

const studentSchema = new Schema<Student>({
  name: {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
  },
  gender: ["male", "female"],
  dateOfBirth: String,
  email: String,
  mobileNo: String,
  emmergencyMobileNo: String,
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  gurdian:gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: String,
  isactive: ["active", "inactive"],
});

// in this line of code we  create a veriable called stdunt and model<Student> we tell what type of model will be then we  ("Student" -> this one is the name of model that we are creating , studentSchema -> this is the name based on which we are creating the model) 

export const studentModel = model<Student>('Student', studentSchema);