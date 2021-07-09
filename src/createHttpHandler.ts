import {Context} from "aws-lambda";
import {HttpResponse, httpResponse} from "./httpResponse";
import {Callback} from "aws-lambda/handler";
import {objectifyError} from "@yehonadav/safestringify";
import {HttpError} from "./httpError";
import {statusCode} from "@yehonadav/statuscodes";

export type AsyncHandler<TEvent = any, TResult = any> = (
  event: TEvent,
  context: Context,
  callback: Callback<TResult>,
) => Promise<HttpResponse>;

export const createHandler = <TEvent = any, TResult = any> (handler:AsyncHandler<TEvent, TResult>):AsyncHandler<TEvent, TResult> => async (
  event: TEvent,
  context: Context,
  callback: Callback<TResult>,
) =>
{
  const section = context.functionName;

  console.log({
    section,
  });

  try {
    return await handler(event, context, callback);
  }

  catch (e) {
    console.error({
      section,
      error: objectifyError(e)
    });

    if (e instanceof HttpError)
      return httpResponse({
        statusCode: e.statusCode,
        body: {
          message: e.message,
        }
      });

    else
      return httpResponse({
        statusCode: statusCode.internalServerError,
        body: {
          message: e.message,
        }
      });
  }
}