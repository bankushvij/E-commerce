import React from 'react'
import { Route } from "react-router-dom";
import CommonPageLayout from '../layouts/CommonPageLayout'
function CommonPageHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CommonPageLayout>
            <Component {...props} />
          </CommonPageLayout>
        )}
      />
    </>
  )
}

export default CommonPageHoc
