export * from './lib/async'
export * from './lib/hash'
export * from './lib/number'

import { GraphQLServer } from 'graphql-yoga'
import { importSchema } from 'graphql-import'
import { resolvers } from './data/resolvers'
const typeDefs = importSchema('src/data/schema.graphql')

const server = new GraphQLServer({ typeDefs, resolvers })
// tslint:disable-next-line:no-expression-statement
server.start(() => console.log('Server is running on localhost:4000'))

// uuid: https://github.com/kelektiv/node-uuid
import { v4 as uuidv4 } from 'uuid'
export const uid = uuidv4()
