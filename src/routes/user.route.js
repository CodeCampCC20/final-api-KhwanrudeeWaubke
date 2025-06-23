import express from "express";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get('/me', userController.getMe)
userRouter.patch('/me', userController.update)


export default userRouter;