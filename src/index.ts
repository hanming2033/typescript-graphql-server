import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './data/resolvers'
// import mongoose

const server = new GraphQLServer({ typeDefs: './src/data/schema.graphql', resolvers })
// tslint:disable-next-line:no-expression-statement
server.start(() => console.log('Server is running on localhost:4000'))

// uuid: https://github.com/kelektiv/node-uuid
import { v4 as uuidv4 } from 'uuid'
export const uid = uuidv4()
