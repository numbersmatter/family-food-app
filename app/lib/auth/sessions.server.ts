import { createCookieSessionStorage } from "@remix-run/node";

const cookieSecret = process.env.COOKIE_SECRET ?? "remix-app-cookie-secret";

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [cookieSecret], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});
