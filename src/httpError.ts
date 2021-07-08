export interface IHttpError {
  statusCode: number;
  message: string;
}

export class HttpError extends Error {
  statusCode: number;

  constructor({statusCode, message}:IHttpError) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const httpError = (args:IHttpError) => new HttpError(args);