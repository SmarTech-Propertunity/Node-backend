const { GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');
const Appointment = require('../models/appointmentModel');
const AppointmentType = require('../types/appointmentType');

const appointmentMutations = {
  createAppointment: {
    type: AppointmentType,
    args: {
      agentId: { type: new GraphQLNonNull(GraphQLInt) },
      acquireId: { type: new GraphQLNonNull(GraphQLInt) },
      date: { type: new GraphQLNonNull(GraphQLString) },
      propertyId: { type: new GraphQLNonNull(GraphQLInt) },
      place: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (_, args) => Appointment.create(args),
  },
  updateAppointment: {
    type: AppointmentType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      agentId: { type: GraphQLInt },
      acquireId: { type: GraphQLInt },
      date: { type: GraphQLString },
      propertyId: { type: GraphQLInt },
      place: { type: GraphQLString }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await Appointment.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Cita con ID ${id} no encontrada.`);
      return await Appointment.findByPk(id);
    },
  },
  deleteAppointment: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await Appointment.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Cita con ID ${id} no encontrada.`);
      return `Cita con ID ${id} eliminada con éxito.`;
    },
  },
};

module.exports = appointmentMutations;
