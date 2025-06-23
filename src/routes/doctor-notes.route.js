import express from "express";
import doctorNotesController from "../controllers/doctor-notes.controller.js";


const doctorNotesRoute = express.Router();

doctorNotesRoute.post('/', doctorNotesController.create)
doctorNotesRoute.get('/my-notes',doctorNotesController.getAlldoctorNotes)
doctorNotesRoute.get('/user/:id', doctorNotesController.getDoctorNote)
doctorNotesRoute.patch('/:id', doctorNotesController.updateDoctorNote )
doctorNotesRoute.delete('/:id', doctorNotesController.deleteDoctorNote)



export default doctorNotesRoute;