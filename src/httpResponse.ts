import {safeStringify} from "@yehonadav/safestringify";
import {JsonObject} from "./types";

interface HttpBase {
  headers?: JsonObject;
  multiValueHeaders?: Record<string, Array<string>>;
}

interface HttpStatus extends HttpBase {
  statusCode: number;
}

export interface HttpResponse extends HttpStatus {
  body: string;
}

export interface IHttpResponse extends HttpStatus {
  body: any;
}

export interface IHttpStatusResponse extends HttpBase {
  body: any;
  [x:string]: any;
}

export const httpResponse = (options:IHttpResponse) => {
  options.body = safeStringify(options.body);
  return options;
}

