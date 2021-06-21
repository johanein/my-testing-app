import React, { memo } from "react";
import { Tooltip } from "react-tippy";
import { useHistory } from "react-router-dom";
import style from "./style.module.css";

const index = memo(({ title, normalized_job_title, uuid, parent_uuid }) => {
  const history = useHistory();
  const handleCardClick = () => {
    history.push(`/details/${uuid}`);
  };

  const handleOnBlur = () => {};
  const handleOnFocus = () => {};
  const handleOnmouseOver = () => {};
  const handleOnmouseOut = () => {};

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyPress={handleCardClick}
      onClick={handleCardClick}
      onMouseOver={handleOnmouseOver}
      onMouseOut={handleOnmouseOut}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      className="col-md-4 col-xl-3 m-2 mt-5 rounded-pill border border-secondary border-5 text-center text-white"
      id={style.mainDiv}
    >
      <Tooltip
        // title={normalized_job_title}
        position="top"
        trigger="mouseenter"
        arrow
        distance={0}
        theme="dark"
        html={(
            <div style={{ width: 400, color: 'white' }}>
              {normalized_job_title}
            </div>
          )}
      >
      <div className="container-md">
        <div className="row">
          <div className="col-md-12 col-xxs-12 h6 p-2 text-white">
            <span id={style.title} className="rounded-pill p-2 text-break overflow-wrap">
              {title}
            </span>
          </div>
        </div>
        <div className="row justify-content-between ">
          <div className="col-md-5 p-2 text-white">
            <span className="fw-bold rounded-pill">UUID: </span>
            {uuid}
          </div>
          <div className="col-md-5 p-2 text-white">
            <span className="fw-bold rounded-pill">Parent UUID: </span>
            {parent_uuid}
          </div>
        </div>
      </div>
      </Tooltip>
    </div>
  );
});

export default index;
