import doctorNotesService from "../services/doctor-notes.service.js";
import userService from "../services/user.service.js";
import createError from "../utils/create-error.js";

const doctorNotesController = {};

// {
//   "userId": "number",
//   "note": "string"
// }

doctorNotesController.create = async (req, res, next) => {
  try {
    const { userId, note } = req.body;

    const findUser = await userService.findUserById(userId);

    if (!findUser) {
      createError(400, "user invalid");
    }

    const newDoctorNotes = await doctorNotesService.create({ userId, note });
    console.log("newDoctorNotes", newDoctorNotes);

    res.status(201).json({
      message: "create doctor notes successfully",
    });
  } catch (error) {
    next(error);
  }
};

doctorNotesController.getAlldoctorNotes = async (req, res, next) => {
  try {
    const id = req.user.id;

    const doctorNotes = await doctorNotesService.getAll(id);
    console.log("doctorNotes", doctorNotes);

    res.status(200).json({
      message: "create doctor notes successfully",
    });
  } catch (error) {
    next(error);
  }
};

doctorNotesController.getDoctorNote = async (req, res, next) => {
  try {
    const id = req.params.id;

    const doctorNote = await doctorNotesService.getDoctorNote(Number(id));
    console.log("doctorNotes", doctorNote);

    res.status(200).json({
      doctorNote,
    });
  } catch (error) {
    next(error);
  }
};

doctorNotesController.updateDoctorNote = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params.id;

    const updateDoctorNote = await doctorNotesService.updateDoctorNote(
      data,
      Number(id)
    );
    console.log("updateDoctorNote", updateDoctorNote);

    res.status(200).json({
      updateDoctorNote,
    });
  } catch (error) {
    next(error);
  }
};

doctorNotesController.deleteDoctorNote = async (req, res, next) => {
  try {
    const id = req.params.id;

    await doctorNotesService.deleteDoctorNote(Number(id));

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

export default doctorNotesController;
