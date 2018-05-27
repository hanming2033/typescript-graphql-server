// https://github.com/kelektiv/node.bcrypt.js/
// import * as bcrypt from 'bcryptjs'

export interface IResolverMap {
  readonly [key: string]: {
    readonly [key: string]: (parent: any, args: any, context: {}, info: any) => any
  }
}

// tslint:disable-next-line:no-let readonly-array prefer-const readonly-keyword
let links: Array<{ id: string; url: string; description: string }> = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
]

// tslint:disable-next-line:no-let
let idCount = links.length

export const resolvers: IResolverMap = {
  // query resolvers: graphql will run all the resolvers
  // for every nested level of query
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    // when calling feed, it will return the links(defined elsewhere in this case)
    feed: () => links,
    link: (_, args: GQL.ILinkOnQueryArguments) => links.find(link => link.id === args.id)
  },
  Mutation: {
    post: (_, args: GQL.IPostOnMutationArguments) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      // tslint:disable-next-line:no-expression-statement
      links.push(link)
      return link
    },
    updateLink: (_, args: GQL.IUpdateLinkOnMutationArguments) => {
      const linkToUpdate = links.find(link => link.id === args.id)
      // tslint:disable-next-line:no-if-statement
      if (!linkToUpdate) return null
      // tslint:disable-next-line:no-expression-statement no-object-mutation
      linkToUpdate.description = args.description ? args.description : linkToUpdate.description
      // tslint:disable-next-line:no-expression-statement no-object-mutation
      linkToUpdate.url = args.url ? args.url : linkToUpdate.url
      return linkToUpdate
    },
    deleteLink: (_, args: GQL.IDeleteLinkOnMutationArguments) => {
      const linkToDelete = links.find(link => link.id === args.id)
      const index = links.findIndex(link => link.id === args.id)
      // tslint:disable-next-line:no-expression-statement
      links.splice(index, 1)
      return linkToDelete
    }
  }
}
