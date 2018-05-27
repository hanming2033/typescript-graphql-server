import { IResolverMap } from './graphql-utils'
// https://github.com/kelektiv/node.bcrypt.js/
import * as bcrypt from 'bcryptjs'
export const resolvers: IResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`
  },
  Mutation: {
    register: async (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
      const hashedPassword = await bcrypt.hash(password, 10)
      // use the password to create user and return boolean if successful or not
      return hashedPassword + email
    }
  }
}
