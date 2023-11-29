import { Outlet } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
import pkg from "@trussworks/react-uswds";
const { Button } = pkg;

function Test() {
  const navigate = useNavigate();

  const handleNavHomeOnclick = () => {
    navigate("");
  };
  return (
    <div>
      <p>This is in Test Layout!</p>
      <Button onClick={handleNavHomeOnclick} type={"button"}>
        Go Home
      </Button>
      <Outlet />
    </div>
  );
}

export default Test;
