import React, { memo, useReducer } from "react";
import MainJobListingPage from "./MainPage";
import { appReducer, initialState, Provider } from "../Reducers";

// http://api.dataatwork.org/v1/jobs

// http://api.dataatwork.org/v1/jobs/<uuid>

// mobile (below 760pxwidth )& desktop (760px and above)

const index = memo((props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <MainJobListingPage />
    </Provider>
  );
});
export default index;
