import { FormStrategy } from "remix-auth-form";
import { authenticator } from "../auth.server";

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const idToken = form.get("idToken");

    let email = form.get("email");
    let password = form.get("password");
    let user = await login(email, password);
  })
);
