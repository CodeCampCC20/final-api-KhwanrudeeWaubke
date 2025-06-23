import doctorService from "../services/doctor.service.js";
import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";

const authenDoctor = async (req, res, next) => {
  try {
    const auhtHeader = req.headers.authorization;

    console.log(auhtHeader);
    if (!auhtHeader || !auhtHeader.startsWith("Bearer")) {
      createError(401, "Unauthorization !");
    }

    const token = auhtHeader.split(" ")[1];
    if (!token) {
      createError(401, "Unauthorization !!");
    }

    const payload = jwtService.verify(token);
    console.log(payload);

    const { password: p, ...doctor } = await doctorService.findDoctorById(
      payload.id
    );
    console.log(doctor);
    if (!doctor) {
      createError(401, "Unauthorization !!!");
    }
    req.doctor = doctor;
    next();
  } catch (error) {
    next(error);
  }
};
export default authenDoctor;
