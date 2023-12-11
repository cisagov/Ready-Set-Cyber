/* eslint-disable react/no-children-prop */
import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import pkg from "@trussworks/react-uswds";
const { CardGroup, Card, CardHeader, CardBody } = pkg;

export const meta: MetaFunction = () => [{ title: "Ready Set Cyber" }];

export default function Index() {
  const navigate = useNavigate();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center flex-col">
      <div>
        <h1>
          {
            "Take a few minutes to find CISA resources to improve your organization's cybersecurity"
          }
        </h1>
        <p className="text-center">
          It is all our responsibility to safeguard the cybersecurity of our
          users and members
        </p>
      </div>
      <CardGroup>
        <Card
          headerFirst
          gridLayout={{ tablet: { col: 6 } }}
          containerProps={{ className: "border-ink" }}
        >
          <CardHeader className="bg-base-lightest">
            <h3 className="usa-card__heading ">Small Business</h3>
            <p className="font-sans-6 text-primary">
              Do you have limited resources or personnel allocated to
              cybersecurity?
            </p>
            <p>{"(Can be but is not exclusivly:"}</p>
            <p>1 or 2 person security staff</p>
            <p>IT Security is not the primary role of security staff</p>
            <p>Relies upon ISP for security functions</p>
            <p>Minimal number of IP addresses</p>
            <p>Less than 200 active end points{")"}</p>
          </CardHeader>
          <CardBody className="padding-top-3 bg-base-lightest">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => navigate("smallBusiness")}
            >
              Start Here
            </button>
          </CardBody>
        </Card>
        <Card
          headerFirst
          gridLayout={{ tablet: { col: 6 } }}
          containerProps={{ className: "border-ink" }}
        >
          <CardHeader className="bg-base-lightest">
            <h3 className="usa-card__heading">Major Organization</h3>
            <p className="font-sans-6 text-primary">
              Are you an organization with a dedicated IT and security program?
            </p>
          </CardHeader>
          <CardBody className="padding-top-3 bg-base-lightest ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={() => navigate("majorOrganization")}
            >
              Start Here
            </button>
          </CardBody>
        </Card>
      </CardGroup>
    </main>
  );
}
