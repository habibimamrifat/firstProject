import { string } from 'joi';
import { z } from 'zod';

// Define individual schemas for nested objects
const nameValidationSchema = z.object({
  firstName: z.string()
    .min(2, { message: "this field is required" })
    .refine((value) => /^[a-zA-Z]+$/.test(value), "This value is not correct"),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  contactNo: z.string(),
  occupation: z.string(),
});

// Define the main student schema
const studentValidationSchema = z.object({
  idx: z.string(),
  password:z.string(),
  name: nameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  email: z.string()
    .min(1, { message: "this field is required" })
    .email("This is not a valid email type"),
  mobileNo: z.string(),
 
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  gurdianX: guardianValidationSchema,
  localGurdianX: localGuardianValidationSchema,
  profileImg: z.string().url(),
  isactive: z.enum(["active", "inactive"]).default("active"),
  isDeleted:z.boolean()
});

export default studentValidationSchema;
