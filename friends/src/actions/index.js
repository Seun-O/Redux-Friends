import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FAILED = "FAILED";
export const SUCCESS = "SUCCESS";
export const ADD = "ADD";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post(`http://localhost:5000/api/login`, creds)
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: SUCCESS });
        setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 2000);
      }
      localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
        dispatch({ type: FAILED });
      }

      setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 2000);
    });
};

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`http://localhost:5000/api/friends`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

export const addFriend = friend => dispatch => {
  axios
    .post(`http://localhost:5000/api/friends`, friend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: ADD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
