import Joi from "joi";

const nameJoiValidationSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        "string.empty": "First name is required",
        "string.pattern.base":
          "First name must only contain alphabetic characters",
      }),
    middleName: Joi.string().optional().allow(""),
    lastName: Joi.string().optional().allow(""),
  });

  const guardianJoiValidationSchema = Joi.object({
    fatherName: Joi.string().optional().allow(""),
    fatherOccupation: Joi.string().optional().allow(""),
    fatherContactNo: Joi.string().optional().allow(""),
    motherName: Joi.string().optional().allow(""),
    motherOccupation: Joi.string().optional().allow(""),
    motherContactNo: Joi.string().optional().allow(""),
  });

  const localGuardianJoiValidationSchema = Joi.object({
    name: Joi.string().optional().allow(""),
    contactNo: Joi.string().optional().allow(""),
    occupation: Joi.string().optional().allow(""),
  });

  const studentJoiValidationSchema = Joi.object({
    idx: Joi.string().required().messages({
      "any.required": "This section must be filled",
    }),
    name: nameJoiValidationSchema.required().messages({
      "any.required": "The name is required",
    }),
    gender: Joi.string().valid("male", "female").optional(),
    dateOfBirth: Joi.string().optional().allow(""),
    email: Joi.string().required().email().messages({
      "string.email": "This is not a valid email type",
      "any.required": "Email is required",
    }),
    mobileNo: Joi.string().optional().allow(""),
    emergencyMobileNo: Joi.string().optional().allow(""),
    bloodGroup: Joi.string()
      .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
      .optional()
      .messages({
        "any.only": "{#label} is not valid",
      }),
    guardian: guardianJoiValidationSchema.optional(),
    localGuardian: localGuardianJoiValidationSchema.optional(),
    profileImg: Joi.string().optional().allow(""),
    isactive: Joi.string()
      .valid("active", "inactive")
      .default("active")
      .required()
      .messages({
        "any.required": "isactive status is required",
      }),
  });
  export default studentJoiValidationSchema;