import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from "./config/typeorm.config"
import {graphQLConfig} from "./config/graphql.config"
@Module({
  imports: [
    // TypeOrmModule.forRoot(typeOrmConfig),
    // GraphQLModule.forRoot(graphQLConfig),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'tr',
    //   password: 'tr',
    //   database: 'tr_development',
    //   entities: ['dist/**/*.model.js'],
    //   synchronize: false,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
