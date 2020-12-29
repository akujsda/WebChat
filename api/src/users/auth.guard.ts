import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import * as jwt from "jsonwebtoken";
require('dotenv').config();

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = await GqlExecutionContext.create(context).getContext()

    if (!ctx.req.autorization) {
      return false
    }

    ctx.user = await this.validateToken(ctx.req.autorization)
    return true
  }

   validateToken (auth: string){
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1]
    try {
      return jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
