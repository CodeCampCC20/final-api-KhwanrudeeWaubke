import prisma from "../config/prisma.js"

const doctorNotesService = {}

doctorNotesService.create = (data) => {
  return prisma.doctorNote.create({data})
}

doctorNotesService.getAlldoctorNotes = (id) => {
  return prisma.doctorNote.findMany({where:{userId:id}})
}

doctorNotesService.getDoctorNote = (id) => {
  return prisma.doctorNote.findUnique({where:{id}})
}

doctorNotesService.updateDoctorNote = (data,id) => {
  return prisma.doctorNote.update({data,where:{id}})
}


doctorNotesService.deleteDoctorNote = (id) => {
  return prisma.doctorNote.delete({where:{id}})
}


export default doctorNotesService