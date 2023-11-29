/* eslint-disable react/no-children-prop */
import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import pkg from "@trussworks/react-uswds";
const { Button } = pkg;

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("simplequestions");
  };
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Button onClick={handleOnclick} type={"button"}>
        Go To Questionairre
      </Button>
    </main>
  );
}
