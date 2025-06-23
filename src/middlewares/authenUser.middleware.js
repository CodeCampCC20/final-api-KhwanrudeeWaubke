import jwtService from "../services/jwt.service.js";
import userService from "../services/user.service.js";
import createError from "../utils/create-error.js";

const authenUser = async (req, res, next) => {
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

    const { password: p, ...user } = await userService.findUserById(payload.id);
    console.log(user);
    if (!user) {
      createError(401, "Unauthorization !!!");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
export default authenUser;
