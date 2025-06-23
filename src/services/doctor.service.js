import prisma from "../config/prisma.js";

const doctorService = {};

doctorService.findDoctorByUsername = (username) => {
  return prisma.doctor.findUnique({
    where: { username },
  });
};

doctorService.findDoctorById = (id) => {
  return prisma.doctor.findUnique({
    where: { id },
  });
};


doctorService.createDoctor = (data) => {
  return prisma.doctor.create({ data });
};

doctorService.updateDoctor = (data,id) => {
  return prisma.doctor.update({ data, where: {id} });
};


export default doctorService;
