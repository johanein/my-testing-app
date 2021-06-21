import { createContext } from "react";
const myContext = createContext();
const { Provider } = myContext || {};

const initialState = {
  jobList: [],
};

export const JOB_LIST = "JOB_LIST";

function appReducer(state, action) {
  switch (action.type) {
    case JOB_LIST: {
      const { payload } = action || {};
      return {
        ...state,
        jobList: payload,
      };
    }
    // Do something here based on the different types of actions
    default:
      return state;
  }
}

export { appReducer, initialState, Provider, myContext };
