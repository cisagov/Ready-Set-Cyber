import { Outlet } from "@remix-run/react";

function Test() {
  return (
    <div>
      <p>This is in Test Layout!</p>
      <Outlet />
    </div>
  );
}

export default Test;
