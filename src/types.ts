export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
export type JsonObject = Record<string, Json>;