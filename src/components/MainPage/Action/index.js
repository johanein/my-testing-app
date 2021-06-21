import axios from "axios";
import { JOB_LIST } from "../../../Reducers";

const jobListApiCall = async ({ dispatch }) => {
  const result = await axios.get("http://api.dataatwork.org/v1/jobs");
  dispatch({ type: JOB_LIST, payload: result.data });
};

export { jobListApiCall };
