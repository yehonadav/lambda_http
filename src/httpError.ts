export interface IHttpError {
  statusCode: number;
  message: string;
}

export class HttpError extends Error {
  statusCode: number;
  message: string;

  constructor({statusCode, message}:IHttpError) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const httpError = (args:IHttpError) => new HttpError(args);