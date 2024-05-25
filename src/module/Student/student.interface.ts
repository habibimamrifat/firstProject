import { Model } from "mongoose";


// 1. Create an interface representing a document in MongoDB.
export type TName ={
  firstName: string;
  middleName: string;
  lastName: string;
}
export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TlocalGirdian = {
  name: string;
  contactNo: string;
  occupation: string;
};

export type TStudent = {
  idx:string;
  password:string;
  name:TName ;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  mobileNo: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  gurdianX: TGurdian;
  localGurdianX: TlocalGirdian;
  profileImg?: string;
  isactive: "active" | "inactive";
  isDeleted:boolean;
};


// export type StudentMathods ={
//   isUserExist(user:string): Promise<TStudent | null>
// }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMathods>;

export interface UserSaticModel extends Model<TStudent> {
  isUserExist(id: string) :   Promise<TStudent | null>
}