import React, { memo, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { myContext } from "../../Reducers";
import { jobDetailsApiCall } from "../../Action";
import style from "./style.module.css";

const index = memo(() => {
  const { uuid } = useParams();
  const { state, dispatch } = useContext(myContext);
  const { jobDetails } = state || {};

  useEffect(() => {
    jobDetailsApiCall({ dispatch, uuid });
  }, [uuid, dispatch]);

  return (
    <div id={style.card} class="card m-5 w-100 h-100">
      <div class="card-body">
        <h5 class="card-title h2 text-white text-center">
          <span id={style.title} className="rounded-pill p-2 pb-3 text-center">
            Job details
          </span>
        </h5>
        <div id={style.detail} className="container-md">
        {Object.entries(jobDetails).map(([key, value]) => (
            <div id={style.eachRow} className="row m-5 p-2 rounded-pill g-2">
              <div id={style.key} className="col-xxl-6 col-lg-4  text-white h5">
                {key}
              </div>
              <div className="col-xxl-6 col-lg-8 text-white">{value}</div>
            </div>
        ))}
        </div>
        <Link
          className="btn btn-danger"
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
});

export default index;
