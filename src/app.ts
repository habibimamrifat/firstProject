import express from 'express';
import cors from 'cors';
import { Studentroute } from './module/Student/student.route';
const app = express();

// parser
app.use(express.json());
//cors
app.use(cors());


// here we are linking controller for ech request that comes, we arfe linking app. ts to route.ts we are forwordaing the request to the router



// request => /api/v1/students/create-student ....suppose
// request => /api/v1/students......it will get in the students route
app.use("/api/v1/students", Studentroute)


app.get('/', (req, res) => {
  res.send("THE PORT IS WORKING");
});

export default app;
