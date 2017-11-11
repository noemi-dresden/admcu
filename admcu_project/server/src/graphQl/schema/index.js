import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolver/index';

import User from './user';
import Tandem from './tandem';


const RootQuery = `
  type RootQuery{
    user(id: String): User
    tandems(latitude: Float, longitude: Float) : [Tandem]
  }
`;

const RootMutation = `
type RootMutation{
  setUser(name: String, password: String): User
}
`;

const SchemaDefinition = `
schema{
    query: RootQuery
    mutation: RootMutation
}
`;

export default makeExecutableSchema({
    typeDefs: [
      SchemaDefinition, RootQuery, RootMutation, User, Tandem
    ],
    resolvers,
});