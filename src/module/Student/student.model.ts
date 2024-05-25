import { Schema, model } from "mongoose";
import { TGurdian, TName, TStudent, TlocalGirdian, UserSaticModel} from "./student.interface";
import validator from "validator";
import bcrypt from "bcrypt"
import config from "../../config";



// , StudentMathods, StudentModel

const nameSchima = new Schema<TName>({
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

const gurdianSchema = new Schema<TGurdian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGurdianSchema = new Schema<TlocalGirdian>({
  name: { type: String },
  contactNo: { type: String },
  occupation: { type: String },
});

// ,StudentModel,StudentMathods
const studentSchema = new Schema<TStudent, UserSaticModel>({
  idx: {
    type: String,
  },
  password:{
    type:String
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
  mobileNo: { type: String},
  
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message: "{VALUE} is not valid",
    },
  },
  gurdianX: gurdianSchema,
  localGurdianX: localGurdianSchema,
  profileImg: String,
  isactive: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
    required: true,
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
},
{
  toJSON:{
    virtuals:true
  }
});

// in this line of code we  create a veriable called stdunt and model<Student> we tell what type of model will be then we  ("Student" -> this one is the name of model that we are creating , studentSchema -> this is the name based on which we are creating the model)

// now implement the function instent mathod
// studentSchema.methods.isUserExist = async function(id:string) {
//   const result = await student.findOne({id})
//   return result
// }

studentSchema.pre("save", async function(next){
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_saltRounds));
  next()
})


studentSchema.statics.isUserExist= async function(id: string){
  const result = student.findOne({id})
  return result
}

// Middleware to exclude deleted documents
studentSchema.pre("find", async function(next) {
 
  try {
    this.find({ isDeleted: { $ne: true }});
    next(); // Call next() after modifying the query
  } catch (error: any) {
    next(error); // Call next with an error if something goes wrong
  }
});
studentSchema.pre("findOne", async function(next) {
 
  try {
    this.findOne({ isDeleted: { $ne: true }});
    next(); // Call next() after modifying the query
  } catch (error: any) {
    next(error); // Call next with an error if something goes wrong
  }
});


studentSchema.pre("aggregate", async function(next) {
 
 try{
  
   this.pipeline().unshift({$match :{ isDeleted:{$ne: true}}})
 }catch(err:any)
 {
  console.log(err)
 }
});

studentSchema.virtual("fullName").get(function(){
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`
})




export const student = model<TStudent,UserSaticModel>("Student", studentSchema);
