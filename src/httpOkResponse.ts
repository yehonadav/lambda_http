import {statusCode} from "@yehonadav/statuscodes";
import {httpResponse, IHttpResponse, IHttpStatusResponse} from "./httpResponse";

export const httpOkResponse = (options: IHttpStatusResponse) => {
  options.statusCode = statusCode.ok;
  return httpResponse(options as IHttpResponse);
}