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
      postProductImg(evt).then(function(response) {
      dispatch({ data: JSON.parse(response), type: POST_IMG });
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

function postProductImg( data ) {
  return new Promise(function(resolve, reject) {
    return fetch("http://54.171.89.165:8080/", {
      method: "post",
      body: data
    })
      .then(res => res.text())
      .then(txt => resolve(txt))
      .catch(er => console.error(er));
  });
}

export function resetApp() {
  return (dispatch, getState) => {
    dispatch({ type: RESET_APP });
  };
}
