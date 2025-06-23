import express from "express";
import healthRecordsController from "../controllers/health-records.controller.js";

const healthRecordsRouter = express.Router();

healthRecordsRouter.post('/', healthRecordsController.create)
healthRecordsRouter.get('/', healthRecordsController.getHealthRecords)
healthRecordsRouter.get('/:id', healthRecordsController.getHealthRecord)
healthRecordsRouter.patch('/:id', healthRecordsController.updateHealthRecord )
healthRecordsRouter.delete('/:id', healthRecordsController.deleteHealthRecord)



export default healthRecordsRouter;