import express from "express";
import doctorController from "../controllers/doctor.controller.js";

const doctorRouter = express.Router();

doctorRouter.get('/me', doctorController.getMe)
doctorRouter.patch('/me', doctorController.update)


export default doctorRouter;