import { NestFactory } from '@nestjs/core';
const { graphqlHTTP } = require('express-graphql');

import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: console,
  });

  app.use('/graphiql', graphqlHTTP({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `/subscriptions`,
  }));

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
