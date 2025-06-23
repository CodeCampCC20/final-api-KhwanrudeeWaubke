import express from "express";
import cors from "cors";

import notFoundMiddleware from "./src/middlewares/not-found.middleware.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";
import doctorRouter from "./src/routes/doctor.route.js";
import authenUser from "./src/middlewares/authenUser.middleware.js";
import authenDoctor from "./src/middlewares/authenDoctor.middleware.js";
import errorMiddleware from "./src/middlewares/error.middlewares.js";
import healthRecordsRouter from "./src/routes/health-records.route.js";
import doctorNotesRoute from "./src/routes/doctor-notes.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// path api แก้ไข ตามงานของเราเอง
app.use("/auth", authRouter); // เพิ่มอันนี้ อย่างลืม import
app.use('/users',authenUser, userRouter)
app.use('/doctors',authenDoctor, doctorRouter)
app.use('/health-records',authenUser, healthRecordsRouter)
app.use('/doctor-notes',authenDoctor , doctorNotesRoute)

// เพ่ิมเข้ามาในบรรทัดล่างสุด ไว้ดักจับ error
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8877;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});