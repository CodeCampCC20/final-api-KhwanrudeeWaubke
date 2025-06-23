import jwt from "jsonwebtoken";

// อย่าลืมเพ่ิม JWT_SECRET ไว้ใน .env
const jwtService = {
  sign: (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET);
  },
  verify: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};

export default jwtService;