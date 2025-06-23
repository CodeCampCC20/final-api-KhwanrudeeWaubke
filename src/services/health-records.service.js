import prisma from "../config/prisma.js";

const healthRecordsService = {};

healthRecordsService.create = (data) => {
  return prisma.healthRocord.create({ data });
};

healthRecordsService.getHealthRecords = () => {
  return prisma.healthRocord.findMany();
};

healthRecordsService.getHealthRecord = (id) => {
  return prisma.healthRocord.findUnique({ where: { id } });
};

healthRecordsService.updateHealthRecord = (data, id) => {
  return prisma.healthRocord.update({ data, where: {id}  });
};

healthRecordsService.deleteHealthRecord = (id) => {
  return prisma.healthRocord.delete({ where: {id}  });
};

export default healthRecordsService;
