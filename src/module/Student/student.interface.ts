

// 1. Create an interface representing a document in MongoDB.
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type localGirdian = {
  name: string;
  contactNo: string;
  occupation: string;
};

export type Student = {
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  mobileNo: string;
  emmergencyMobileNo: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  gurdian: Gurdian;
  localGurdian: localGirdian;
  profileImg?: string;
  isactive: "active" | "inactive";
};
