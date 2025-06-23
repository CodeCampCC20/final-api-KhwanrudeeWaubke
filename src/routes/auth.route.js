import express from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register/doctor", authController.registerDoctor);
authRouter.post("/login/doctor", authController.doctorLogin);

authRouter.post("/register/user", authController.registerUser);
authRouter.post("/login/user", authController.loginUser);




export default authRouter;