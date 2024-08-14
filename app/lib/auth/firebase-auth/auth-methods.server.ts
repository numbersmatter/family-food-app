import { authFirebase } from "./auth-config.server";

const signin_with_token = async (id_token: string) => {
  const expires_in = 1000 * 60 * 60 * 24 * 5; // 5 days
  const session_cookie = await authFirebase.server.createSessionCookie(
    id_token,
    { expiresIn: expires_in }
  );

  return session_cookie;
};

const signin_with_email_and_password = async (
  email: string,
  password: string
) => {
  const { idToken } = await authFirebase.signInWithPassword(email, password);

  return signin_with_token(idToken);
};

export { signin_with_email_and_password, signin_with_token };
