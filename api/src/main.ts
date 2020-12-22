import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const { graphqlHTTP } = require('express-graphql');
// import * as express from "express"
// import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: console,
  });
  // app.use(express.static(join(process.cwd(), '../public')));

  app.use('/graphiql', graphqlHTTP({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `/subscriptions`,
  }));

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
