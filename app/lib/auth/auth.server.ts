import { Authenticator } from "remix-auth";
import { sessionStorage } from "./sessions.server";

export const authenticator = new Authenticator(sessionStorage);
