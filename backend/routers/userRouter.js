import express from "express";
import { data } from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createdUsers = await User.insertMany(data.users); //inserting dummy users from data-file to collection in mongoDB
  res.send({ createdUsers });
});

export default userRouter;
