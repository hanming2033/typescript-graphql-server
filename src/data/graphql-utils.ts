export interface IResolverMap {
  readonly [key: string]: {
    readonly [key: string]: (parent: any, args: any, context: {}, info: any) => any
  }
}
