/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa for jsdom. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
  fetchMiddlewares,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AUthController } from './../src/auth/authController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MeController } from './../src/me/meController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsersController } from './../src/users/usersController';
import { authenticationHandler } from './../src/authentication';
// @ts-ignore - no great way to install types from subpackage
const promiseAny = require('promise.any');
import { Hono, Handler, Context } from 'hono';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  'Me': {
    dataType: 'refObject',
    properties: {
      'sub': { "dataType": "double", "required": true },
      'email': { "dataType": "string", "required": true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'User': {
    dataType: 'refObject',
    properties: {
      'id': { "dataType": "double", "required": true },
      'email': { "dataType": "string", "required": true },
      'name': { "dataType": "string", "required": true },
      'status': { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["Happy"] }, { "dataType": "enum", "enums": ["Sad"] }, { "dataType": "enum", "enums": ["In the zone"] }] },
      'phoneNumbers': { "dataType": "array", "array": { "dataType": "string" }, "required": true },
      'length': { "dataType": "double", "validators": { "minimum": { "value": 5 } } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_User.email-or-name-or-phoneNumbers-or-length_': {
    dataType: 'refAlias',
    type: { "dataType": "nestedObjectLiteral", "nestedProperties": { "email": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "phoneNumbers": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "length": { "dataType": "double", "validators": { "minimum": { "value": 5 } } } }, "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'UserCreationParams': {
    dataType: 'refAlias',
    type: { "ref": "Pick_User.email-or-name-or-phoneNumbers-or-length_", "validators": {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes<Env>(router: Hono<Env>) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  router.post('/auth/login',
    ...(fetchMiddlewares<Handler<Env>>(AUthController)),
    ...(fetchMiddlewares<Handler<Env>>(AUthController.prototype.login)),

    async function AUthController_login(context: Context, next: any) {
      const args = {
        email: { "in": "formData", "name": "email", "required": true, "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err: any) {
        console.log('got here')
        return context.json({ fields: err.fields });
      }

      const controller = new AUthController();

      const data = await controller.login.apply(
        controller,
        validatedArgs as any
      );

      return handle(controller, data);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  // router.get('/me',
  //   authenticationHandler([{ "oauth2": ["openid email"] }]),
  //   ...(fetchMiddlewares<Handler>(MeController)),
  //   ...(fetchMiddlewares<Handler>(MeController.prototype.getUser)),

  //   async function MeController_getUser(context: any, next: any) {
  //     const args = {
  //       request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
  //       testHeader: { "in": "header", "name": "x-test", "required": true, "dataType": "string" },
  //     };

  //     let validatedArgs: any[] = [];
  //     try {
  //       validatedArgs = getValidatedArgs(args, context, next);
  //     } catch (err: any) {
  //       return new Response(JSON.stringify({ fields: err.fields }), {
  //         status: err.status || 400,
  //       });
  //     }

  //     const controller = new MeController();

  //     const data = await controller.getUser.apply(
  //       controller,
  //       validatedArgs as any
  //     );

  //     return handle(controller, data);
  //   });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.get('/users/:userId',
    ...(fetchMiddlewares<Handler<Env>>(UsersController)),
    ...(fetchMiddlewares<Handler<Env>>(UsersController.prototype.getUser)),

    async function UsersController_getUser(context: Context, next: any) {
      const args = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
        name: { "in": "query", "name": "name", "dataType": "string" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err: any) {
        return new Response(JSON.stringify({ fields: err.fields }), {
          status: err.status || 401,
        });
      }

      const controller = new UsersController();

      const data = await controller.getUser.apply(
        controller,
        validatedArgs as any
      );

      return handle(controller, data);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  router.post('/users',
    ...(fetchMiddlewares<Handler<Env>>(UsersController)),
    ...(fetchMiddlewares<Handler<Env>>(UsersController.prototype.createUser)),

    async function UsersController_createUser(context: any, next: any) {
      const args = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserCreationParams" },
      };

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, context, next);
      } catch (err: any) {
        return new Response(JSON.stringify({ fields: err.fields }), {
          status: err.status || 400,
        });
      }

      const controller = new UsersController();

      const data = await controller.createUser.apply(
        controller,
        validatedArgs as any
      );

      return handle(controller, data);
    });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(
    args: any,
    ctx,
    next: () => any
  ): any[] {
    const errorFields: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return {
            ...ctx.request,
            ctx,
          };
        case 'query':
          return validationService.ValidateParam(
            args[key],
            ctx.query.get(name) ?? undefined,
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            ctx.params[name],
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            ctx.request.headers.get(name) ?? undefined,
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            ctx.body,
            name,
            errorFields,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            ctx.body?.[name],
            name,
            errorFields,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              ctx.files[0],
              name,
              errorFields,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              ctx.files,
              name,
              errorFields,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              ctx.body[name],
              name,
              errorFields,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          }
        case 'res':
          return responder(ctx, next);
      }
    });
    if (Object.keys(errorFields).length > 0) {
      throw new ValidateError(errorFields, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    context: any,
    next: () => any,
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(context, next, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function handle(
    controller: Controller,
    data: string | object | number | void,
  ): Response {
    const headers = controller.getHeaders() as HeadersInit;
    const statusCode = controller.getStatus();

    return returnHandler(controller, undefined, statusCode, data, headers);
  }

  function returnHandler(context: any, next?: () => any, statusCode?: number, data?: any, headers: any = {}): Response {
    console.log('got here')
    if (typeof data === "string") {
      headers["content-type"] = headers["content-type"] || "text/plain";

      return new Response(data, {
        headers,
        status: statusCode || 200,
      });
    }

    if (typeof data === "object") {
      headers["content-type"] = headers["content-type"] || "application/json";

      return context.json(data);
    }

    return new Response(null, {
      headers,
      status: statusCode || 204,
    });

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  }
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
