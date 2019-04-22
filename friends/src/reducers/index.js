import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FAILED,
  SUCCESS,
  ADD
} from "../actions";

const initialState = {
  error: "",
  status: "",
  errorStatusCode: null,
  fetchingData: false,
  friends: [],
  isLoggingIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_RESOLVED:
      return {
        ...state,
        isLoggingIn: false,
        status: ""
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        error: "",
        fetchingData: false
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingData: false
      };
    case SUCCESS:
      return {
        ...state,
        status: "success",
        isLoggingIn: true
      };
    case FAILED:
      return {
        ...state,
        status: "error",
        isLoggingIn: true
      };
    case ADD:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
