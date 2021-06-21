/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useContext } from "react";
import { jobListApiCall } from "../../Action";
import { myContext } from "../../Reducers";

const index = memo((props) => {
  const { state: { jobList } = {}, dispatch } = useContext(myContext);

  const linkArray = jobList.reduce((acc, { links }) => {
    if (links) return links;
    return acc;
  }, []);
  const handleClick = (href) => () => {
    const splitString = href.split("/jobs");
    jobListApiCall({ dispatch, href: splitString[1] });
  };

  return linkArray.map(({ rel, href }) => (
    <div className="col">
      <a href="#" class="link-primary" onClick={handleClick(href)}>
        {rel}
      </a>
    </div>
  ));
});

export default index;
