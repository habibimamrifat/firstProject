import { Schema, model } from "mongoose";
import { Gurdian, Name, Student, localGirdian } from "./student.interface";
import validator from "validator";
import { any } from "joi";

const nameSchima = new Schema<Name>({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "this value is not correct",
    },
  },
  middleName: String,
  lastName: String,
});

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
  idx: {
    type: String,
  },
  name: { type: nameSchima, required: [true, "the name is required"] },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "this is not a valid email type",
    },
  },
  mobileNo: String,
  emmergencyMobileNo: String,
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not valid",
    },
  },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImg: String,
  isactive: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    required: true,
  },
});

// in this line of code we  create a veriable called stdunt and model<Student> we tell what type of model will be then we  ("Student" -> this one is the name of model that we are creating , studentSchema -> this is the name based on which we are creating the model)

export const studentModel = model<Student>("Student", studentSchema);
