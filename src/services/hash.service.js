import bcrypt from "bcryptjs";

const hashService = {
  hash: (password) => {
    return bcrypt.hashSync(password, 12);
  },

  compare: (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
  },
};

export default hashService;