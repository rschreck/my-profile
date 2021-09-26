import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h4>About</h4>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version: </strong> 1.0.1
      </p>
    </Fragment>
  );
};

export { About };
