import React, { memo, useEffect, useContext } from "react";
import ListingComponent from "../ListingComponent";
import LinkList from "../LinkList";
import { jobListApiCall } from "../../Action";
import { myContext } from "../../Reducers";
import style from "./style.module.css";

const index = memo(() => {
  const { dispatch } = useContext(myContext);
  useEffect(() => {
    jobListApiCall({ dispatch });
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row h2 mt-5 mb-1 text-center">
        <div className="col-12 mb-3">
          <span
            id={style.titleSpan}
            className="rounded-pill m-2 p-2 pb-3 text-white"
          >
            Job Listing
          </span>
        </div>
      </div>
      <div
        id={style.list}
        className="row m-2 p-2 justify-content-around overflow-auto"
      >
        <ListingComponent />
      </div>
      <div
        id={style.linkList}
        className="row m-1 p-1 text-center align-items-center justify-content-center overflow-auto"
      >
        <LinkList />
      </div>
    </div>
  );
});

export default index;
