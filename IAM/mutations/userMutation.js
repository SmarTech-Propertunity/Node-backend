
const { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');
const User = require('../models/userModel');
const UserType = require('../types/userType');

const userMutations = {
  createUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      civilStatus: { type: GraphQLString },
      profilePhoto: { type: GraphQLString },
      role: { type: GraphQLString },
      isActive: { type: GraphQLBoolean }
    },
    resolve: (_, args) => User.create(args),
  },
  updateUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      civilStatus: { type: GraphQLString },
      profilePhoto: { type: GraphQLString },
      role: { type: GraphQLString },
      isActive: { type: GraphQLBoolean }
    },
    resolve: async (_, { id, ...args }) => {
      const [rowsUpdated] = await User.update(args, { where: { id } });
      if (rowsUpdated === 0) throw new Error(`Usuario con ID ${id} no encontrado.`);
      return await User.findByPk(id);
    },
  },
  deleteUser: {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (_, { id }) => {
      const rowsDeleted = await User.destroy({ where: { id } });
      if (rowsDeleted === 0) throw new Error(`Usuario con ID ${id} no encontrado.`);
      return `Usuario con ID ${id} eliminado con éxito.`;
    },
  },
  login: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(_, { email, password }) {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error('Usuario no encontrado');
      // Si usas hash, compara con bcrypt.compareSync(password, user.password)
      if (user.password !== password) throw new Error('Credenciales inválidas');
      return user;
    }
  }
};

module.exports = userMutations;
