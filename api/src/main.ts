import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const { graphqlHTTP } = require('express-graphql');
import express from "express"

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: console,
  });
  app.use(express.static("public"))
  app.use('/graphiql', graphqlHTTP({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `/subscriptions`,
  }));

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
