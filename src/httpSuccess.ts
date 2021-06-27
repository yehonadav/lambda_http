import {statusCode} from "@yehonadav/statuscodes";
import {httpResponse} from "./httpResponse";

export const httpSuccess = httpResponse({
  statusCode: statusCode.ok,
  body: "",
});