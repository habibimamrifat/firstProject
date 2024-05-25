import dotenv from "dotenv"

import path from "path"

// dotenv.config({path: path.join(process.cwd(), ".env")})
dotenv.config({path: path.join(process.cwd(), ".env")})

export default{
    port:process.env.PORT,
    Database_Url:process.env.Database_Url,
    bcrypt_saltRounds:process.env.bcrypt_saltRounds
}