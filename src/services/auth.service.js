import prisma from "../config/prisma.js";

const authService = {
  findUserByEmail: (email) => {
    return prisma.user.findUnique({
      where: { email },
    });
  },
  findUserById: (id) => {
    return prisma.user.findUnique({
      where: { id },
      omit: { password: true },
    });
  },
  createUser: (data) => {
    return prisma.user.create({
      data,
    });
  },
};

export default authService;