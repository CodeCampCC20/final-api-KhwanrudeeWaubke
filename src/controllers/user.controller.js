import hashService from "../services/hash.service.js";
import userService from "../services/user.service.js";

const userController = {};

// {
//   "id": "number",
//   "username": "string"
// }
userController.getMe = (req, res) => {
  res.status(200).json({ id: req.user.id, username: req.user.username });
};

// {
//   "username": "string",
//   "password": "string"
// }

userController.update = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const id = req.user.id;

    const findUser = await userService.findUserById(id);

    const isMatchPassword = hashService.compare(password, findUser.password);

    let updateUser;
    if (!isMatchPassword) {
      const hashPassword = hashService.hash(password);
      updateUser = await userService.updateUser(
        { username, password: hashPassword },
        id
      );
    } else {
      updateUser = await userService.updateUser({ username }, id);
    }

    res.status(200).json({ id: updateUser.id, username: updateUser.username });
  } catch (error) {
    next(error);
  }
};

export default userController;
