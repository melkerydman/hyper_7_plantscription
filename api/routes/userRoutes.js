import express from 'express';
import userControllers from "../controllers/userControllers.js";

const userRoute = express.Router()

userRoute.post("/", userControllers.createUser);
userRoute.get("/:_id", userControllers.getUser);

export default userRoute;