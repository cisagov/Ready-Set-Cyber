import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
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
import uswdsStyles from "./styles.css";
import { useState, createContext, useContext } from "react";

import stylesheet from "~/tailwind.css";

import logo from "./images/CISA_Logo.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: trussStyles },
  { rel: "stylesheet", href: uswdsStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const navMenuItems = [
  <a href="smallBusiness" key="two" className="usa-nav__link">
    <span>Small Business</span>
  </a>,
  <a href="majorOrganization" key="two" className="usa-nav__link">
    <span>Major Organization</span>
  </a>,
  <a href="/" key="three" className="usa-nav__link">
    <span>Home</span>
  </a>,
];
interface FeedbackcontextType {
  feedback: string;
  setFeedback: (feedback: string) => void;
}
const FeedbackContext = createContext<FeedbackcontextType>({
  feedback: "",
  setFeedback: () => {
    null;
  },
});

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);
  const [feedback, setFeedback] = useState("");

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
        <Header basic={true} style={{ borderBottom: "10px solid #005288" }}>
          <div className="usa-nav-container">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "75px",
                width: "75px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="usa-navbar">
              <Title
                style={{
                  color: "#005288",
                  fontStyle: "bold",
                  textAlign: "center",
                }}
              >
                Ready Set Cyber
              </Title>
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
        <FeedbackContext.Provider value={{ feedback, setFeedback }}>
          <Outlet />
        </FeedbackContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}
