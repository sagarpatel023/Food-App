import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to Database"));


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(7001, ()=> {
  console.log("Server is running on port 7001");
});