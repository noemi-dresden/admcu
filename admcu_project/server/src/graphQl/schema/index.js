import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolver/index';

import User from './user';
import Tandem from './tandem';


const RootQuery = `
  type RootQuery{
    user(username: String): User
    userWithEmail(email: String): User
    currentUser: User
    tandems(latitude: Float, longitude: Float, offer: String, search: String) : [Tandem]
    matches(offer: String, search: String) : [Tandem]
    allTandems : [Tandem]
  }
`;

const RootMutation = `
type RootMutation{
  setUser(name: String, password: String): User
  login(email: String!, password: String!): User
  signup(username: String!, email: String!, password: String!): User
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