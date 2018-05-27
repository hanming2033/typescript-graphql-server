// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    info: string;
    feed: Array<ILink>;
    link: ILink | null;
  }

  interface ILinkOnQueryArguments {
    id: string;
  }

  interface ILink {
    __typename: 'Link';
    id: string;
    description: string;
    url: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    post: ILink;
    updateLink: ILink | null;
    deleteLink: ILink | null;
  }

  interface IPostOnMutationArguments {
    url: string;
    description: string;
  }

  interface IUpdateLinkOnMutationArguments {
    id: string;
    url?: string | null;
    description?: string | null;
  }

  interface IDeleteLinkOnMutationArguments {
    id: string;
  }
}

// tslint:enable
