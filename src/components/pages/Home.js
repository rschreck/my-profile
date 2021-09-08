import React from "react";
import "../../App.css";
import { Users } from "../users/users";

function Home() {
  return (
    <div className="grid-3">
      {/* <div></div> */}
      <Users />
    </div>
  );
}

export { Home };
