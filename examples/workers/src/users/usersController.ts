import { Context, Next } from 'hono';
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
  Middlewares,
  Request,
  Tags,
  Example,
} from '@tsoa/runtime';

import { User } from './user';
import { UsersService, UserCreationParams } from './usersService';

// async function corsMiddleware(controller: Controller, next: Next) {
//   controller.setHeader('access-control-allow-origin', '*');
//   return next();
// }

type RequestWithContext = Request & {
  ctx: Context;
};

@Route('users')
@Tags('users')
export class UsersController extends Controller {
  @Get('{userId}')
  // @Middlewares(corsMiddleware)
  public async getUser(
    @Path() userId: number,
    @Request() request: RequestWithContext,
    @Query() name?: string,
  ): Promise<User> {
    const { ctx } = request;
    // Just do a dummy operation to ensure that the context is passed correctly
    ctx.set('name', name)
    return new UsersService().get(userId, name);
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Example<UserCreationParams>({
    email: 'test@example.com',
    name: 'John Doe',
    phoneNumbers: ['1234'],
  })
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<void> {
    this.setStatus(201);
    new UsersService().create(requestBody);
    return;
  }
}
