import axios from "axios";
import { JOB_LIST, JOB_DETAILS } from "../Reducers";

const jobListApiCall = async ({ dispatch, href }) => {
  const result = await axios.get(
    `http://api.dataatwork.org/v1/jobs${href ?? ""}`
  );
  dispatch({ type: JOB_LIST, payload: result.data });
};

const jobDetailsApiCall = async ({ dispatch, uuid }) => {
  const result = await axios.get(`http://api.dataatwork.org/v1/jobs/${uuid}`);
  dispatch({ type: JOB_DETAILS, payload: result.data });
};

export { jobListApiCall, jobDetailsApiCall };
