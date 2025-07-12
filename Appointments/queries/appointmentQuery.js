const { GraphQLList, GraphQLInt } = require('graphql');
const AppointmentType = require('../types/appointmentType');
const Appointment = require('../models/appointmentModel');

const appointmentQueries = {
  allAppointments: {
    type: new GraphQLList(AppointmentType),
    resolve: async () => {
      return await Appointment.findAll();
    },
  },
  appointmentById: {
    type: AppointmentType,
    args: { id: { type: GraphQLInt } },
    resolve: async (_, { id }) => {
      return await Appointment.findByPk(id);
    },
  },
};

module.exports = appointmentQueries;
