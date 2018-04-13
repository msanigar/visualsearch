/* eslint-disable no-use-before-define */

import store from "./store";
import axios from "axios";

export const POST_IMG = "POST_IMG";
export const RESET_APP = "RESET_APP";
export const CHANGE_LOADING = "CHANGE_LOADING";

export function postImg(evt) {
  return (dispatch, getState) => {
    setTimeout(function() {
      loading(false)
      // postProductImg(evt).then(function(response) {
    //   dispatch({ data: response, type: POST_IMG });
    // });
    dispatch({
      data: ["DE911264", "DE911264", "DE911264", "DE911264"],
      type: POST_IMG
    });
    }, 2000)
  };
}

export function loading(bool) {
  return (dispatch, getState) => {
    dispatch({ data: bool, 
      type: CHANGE_LOADING
    });
  }
}

function postProductImg(evt) {
  return new Promise(function(resolve, reject) {
    let data = new FormData(evt.currentTarget.parentNode);
    return fetch("http://localhost:8000/api/upload", {
      method: "post",
      body: data
    })
      .then(
        res => res.data
      )
      .catch(er => console.error(er));
  });
}

export function resetApp() {
  return (dispatch, getState) => {
    dispatch({ type: RESET_APP });
  };
}
