import prisma from "../config/prisma.js";

const userService = {};

userService.findUserByUsername = (username) => {
  return prisma.user.findUnique({ where: { username } });
};

userService.findUserById = (id) => {
  return prisma.user.findUnique({ where: { id } });
};

userService.createUser = (data) => {
  return prisma.user.create({ data });
};

userService.updateUser = (data, id) => {
  return prisma.user.update({ data,
    where: {id}
   });
};


export default userService;
