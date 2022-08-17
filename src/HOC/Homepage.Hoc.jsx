import React from "react";
import { Route } from "react-router-dom";
import Homepagelayout from "../layouts/Homepage.layout";
function HomepageHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <Homepagelayout>
            <Component {...props} />
          </Homepagelayout>
        )}
      />
    </>
  );
}

export default HomepageHoc;
