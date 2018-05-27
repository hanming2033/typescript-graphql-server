import { IResolverMap } from './graphql-utils'
import { sha256Native } from '../lib/hash'
export const resolvers: IResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Bye ${name || 'World'}`
  },
  Mutation: {
    register: async (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
      const hashedPassword = await sha256Native(password)
      // use the password to create user and return boolean if successful or not
      return hashedPassword + email
    }
  }
}
