import doctorService from "../services/doctor.service.js";
import hashService from "../services/hash.service.js";

const doctorController = {};

doctorController.getMe = (req, res) => {
  res.status(200).json({
    id: req.doctor.id,
    username: req.doctor.username,
    specialization: req.doctor.specialization,
  });
};

// {
//   "username": "string",
//   "password": "string",
//   "specialization": "string"
// }
doctorController.update = async (req, res, next) => {
  try {
    const { username, specialization, password } = req.body;
    const id = req.doctor.id;

    const findDoctor = await doctorService.findDoctorById(id);

    const isMatchPassword = hashService.compare(password, findDoctor.password);

    let updateDoctor;
    if (!isMatchPassword) {
      const hashPassword = hashService.hash(password);
      updateDoctor = await doctorService.updateDoctor(
        { username, specialization, password: hashPassword },
        id
      );
    } else {
      updateDoctor = await doctorService.updateDoctor(
        { username, specialization },
        id
      );
    }

    res
      .status(200)
      .json({
        id: updateDoctor.id,
        username: updateDoctor.username,
        specialization: updateDoctor.specialization,
      });
  } catch (error) {
    next(error);
  }
};

export default doctorController;
