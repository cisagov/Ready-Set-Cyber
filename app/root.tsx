import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import pkg from "@trussworks/react-uswds";
const { GovBanner, Header, Title, PrimaryNav, NavMenuButton } = pkg;
import trussStyles from "@trussworks/react-uswds/lib/index.css";
import uswdsStyles from "@trussworks/react-uswds/lib/uswds.css";
import { useState } from "react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: trussStyles },
  { rel: "stylesheet", href: uswdsStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

const navMenuItems = [
  <a href="simplequestions" key="two" className="usa-nav__link">
    <span>Questionairre</span>
  </a>,
  <a href="/" key="two" className="usa-nav__link">
    <span>Home</span>
  </a>,
];

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/_static/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <GovBanner />
        <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div>
        <Header basic={true}>
          <div className="usa-nav-container">
            <div className="usa-navbar">
              <Title>Ready-Set-Cyber</Title>
              <NavMenuButton onClick={onClick} label="Menu" />
            </div>
            <PrimaryNav
              items={navMenuItems}
              mobileExpanded={expanded}
              onToggleMobileNav={onClick}
            >
              <p></p>
            </PrimaryNav>
          </div>
        </Header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
