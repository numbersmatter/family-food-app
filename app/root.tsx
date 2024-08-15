import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  json,
  useLoaderData,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import { shadesOfPurple } from "@clerk/themes";

export const meta: MetaFunction = () => ([{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
}]);


export const loader = async (args: LoaderFunctionArgs) => {

  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    // fetch data
    return { userData: {} };
  });
};



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full bg-white" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: shadesOfPurple,
  }
});