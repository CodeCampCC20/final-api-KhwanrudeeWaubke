
import doctorService from "../services/doctor.service.js";
import hashService from "../services/hash.service.js";
import userService from "../services/user.service.js";

import jwtService from "../services/jwt.service.js";
import createError from "../utils/create-error.js";

const authController = {};

// {
//   "username": "string",
//   "password": "string",
//   "confirmPassword": "string",
//   "specialization": "string"
// }

authController.registerDoctor = async (req, res, next) => {
  try {
    const { username, password, confirmPassword, specialization } = req.body;

    if(password !== confirmPassword) {
      createError(400, "password on match confirmpassword");
    }

    const existDoctor = await doctorService.findDoctorByUsername(username);

    if (existDoctor) {
      createError(400, "User already exist");
    }

    const hashPassword = hashService.hash(password);
    console.log(hashPassword);

    await doctorService.createDoctor({
      username,
      password: hashPassword,
      specialization,
    });

    res.status(201).json({
      message: "Register doctor Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// {
//   "username": "string",
//   "password": "string",
//   "confirmPassword": "string"
// }

authController.registerUser = async (req, res, next) => {
  try {
    const { username, password, confirmPassword } = req.body;

      if(password !== confirmPassword) {
      createError(400, "password on match confirmpassword");
    }

    const existUser = await userService.findUserByUsername(username);

    if (existUser) {
      createError(400, "User already exist");
    }

    const hashPassword = hashService.hash(password);
    console.log(hashPassword);

    await userService.createUser({
      username,
      password: hashPassword,
    });

    res.status(201).json({
      message: "Register user Successfully",
    });
  } catch (error) {
    next(error);
  }
};

// {
//   "username": "string",
//   "password": "string"
// }

authController.doctorLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const existDoctor = await doctorService.findDoctorByUsername(username);
    if (!existDoctor) {
      createError(400, "Doctor username not found");
    }

    const isMatchPassword = hashService.compare(password, existDoctor.password);
    if (!isMatchPassword) {
      createError(400, "Doctor username Invalid");
    }

    const payLoad = { id: existDoctor.id };

    const token = jwtService.sign(payLoad);

    res.status(200).json({
      id: existDoctor.id,
      username: existDoctor.username,
      specialization: existDoctor.specialization,
      accessToken: token,
    });
  } catch (error) {
    next(error);
  }
};

// {
//   "username": "string",
//   "password": "string"
// }

authController.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existUser = await userService.findUserByUsername(username);
    console.log('existUser', existUser)

    if  (!existUser){
      createError(400, "user Username not found");

    }

     const isMatchPassword = hashService.compare(password, existUser.password);
    if (!isMatchPassword) {
      createError(400, "user Username Invalid");
    }

    const payLoad = { id: existUser.id };

    const token = jwtService.sign(payLoad);

    res.status(200).json({
      id: existUser.id,
      username: existUser.username,
      specialization: existUser.specialization,
      accessToken: token,
    });


  } catch (error) {
    next(error)
  }
};


export default authController;
