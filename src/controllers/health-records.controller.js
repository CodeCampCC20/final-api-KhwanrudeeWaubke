import healthRecordsService from "../services/health-records.service.js";

const healthRecordsController = {};

// {
//   "type": "string",
//   "value": "string"
// }
healthRecordsController.create = async (req, res, next) => {
  try {
    const { type, value } = req.body;
    const id = req.user.id;

    const newhealthRecord = await healthRecordsService.create({
      type,
      value,
      userId: id,
    });
    console.log("newhealthRecord", newhealthRecord);

    res.status(201).json({
      message: "create health record successfully",
    });
  } catch (error) {
    next(error);
  }
};

healthRecordsController.getHealthRecords = async (req, res, next) => {
  try {
    const healthRecords = await healthRecordsService.getHealthRecords();

    res.status(200).json({ healthRecords });
  } catch (error) {
    next(error);
  }
};

healthRecordsController.getHealthRecord = async (req, res, next) => {
  try {
    const id = req.params.id;

    const healthRecord = await healthRecordsService.getHealthRecord(Number(id));

    res.status(200).json({ healthRecord });
  } catch (error) {
    next(error);
  }
};

healthRecordsController.updateHealthRecord = async (req, res, next) => {
  try {
    const data = req.body;
    console.log('data', data)
    const id = req.params.id;
    console.log('id', id)

    const updatehealthRecord = await healthRecordsService.updateHealthRecord(
      data,
      +id
    );

    res.status(200).json({ updatehealthRecord });
  } catch (error) {
    next(error);
  }
};

healthRecordsController.deleteHealthRecord = async (req, res, next) => {
  try {
    const id = req.params.id;

    const updatehealthRecord = await healthRecordsService.deleteHealthRecord(
      Number(id)
    );

    res.status(204).json({ });
  } catch (error) {
    next(error);
  }
};

export default healthRecordsController;
