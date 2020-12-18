import { Observable } from "rxjs"
import { ExecutionContext, Injectable } from "@nestjs/common"
import { GqlExecutionContext } from "@nestjs/graphql"
import { AuthGuard } from "@nestjs/passport"
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host"

@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const gqlContext = GqlExecutionContext.create(context)
    const { req: request } = gqlContext.getContext()

    return super.canActivate(new ExecutionContextHost([request]))
  }
}
