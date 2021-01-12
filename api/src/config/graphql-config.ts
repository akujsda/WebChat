export const graphqlConfig={
  typePaths: ['./**/*.graphql'],
  context: ({ req, connection }) => connection ? { req: connection.context } : { req: req.headers },
  installSubscriptionHandlers: true,
  subscriptions: {
    keepAlive: 5000,
  }
}
