import { createContext } from "react";
const myContext = createContext();
const { Provider } = myContext || {};

const initialState = {
  jobList: [],
  jobDetails: {}
};

export const JOB_LIST = "JOB_LIST";
export const JOB_DETAILS = "JOB_DETAILS";

function appReducer(state, action) {
  switch (action.type) {
    case JOB_LIST: {
      const { payload } = action || {};
      return {
        ...state,
        jobList: payload,
      };
    }
    case JOB_DETAILS: {
      const { payload } = action || {};
      return {
        ...state,
        jobDetails: payload,
      };
    }
    // Do something here based on the different types of actions
    default:
      return state;
  }
}

export { appReducer, initialState, Provider, myContext };
