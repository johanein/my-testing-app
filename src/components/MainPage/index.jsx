import React, { memo, useEffect, useContext } from "react";
import { jobListApiCall } from "./Action";
import { myContext } from "../../Reducers";

const index = memo((props) => {
  const { state, dispatch } = useContext(myContext);
  const { jobList } = state || {};
  useEffect(() => {
    jobListApiCall({ dispatch });
  }, [dispatch]);
  console.log({ jobList });
  return <div>Here comes list{JSON.stringify(jobList)}</div>;
});

export default index;
