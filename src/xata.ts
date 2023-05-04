// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "users",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "password", type: "string" },
    ],
  },
  {
    name: "comments",
    columns: [
      { name: "text", type: "text" },
      { name: "userId", type: "link", link: { table: "users" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Comments = InferredTypes["comments"];
export type CommentsRecord = Comments & XataRecord;

export type DatabaseSchema = {
  users: UsersRecord;
  comments: CommentsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://bradgarropy-s-workspace-8eg8mm.us-east-1.xata.sh/db/jqq-astro-blog",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};