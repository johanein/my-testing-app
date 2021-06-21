import React, { memo, useContext } from "react";
import { myContext } from "../../Reducers";
import JobCard from "./JobCard";

const index = memo((props) => {
  const { state } = useContext(myContext);
  const { jobList } = state || {};

  const joListForListing = jobList.filter(({ links }) => !links);

  return joListForListing.map(
    ({ title, normalized_job_title, uuid, parent_uuid } = {}) => (
      <JobCard
        key={uuid}
        uuid={uuid}
        title={title}
        normalized_job_title={normalized_job_title}
        parent_uuid={parent_uuid}
      />
    )
  );
});

export default index;
