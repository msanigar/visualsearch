/* eslint-disable no-use-before-define */

import store from "./store";
import axios from "axios";

export const POST_IMG = "POST_IMG";

export function postImg(evt) {
  return (dispatch, getState) => {
    // postProductImg(evt).then(function(response) {
    //   dispatch({ data: response, type: POST_IMG });
    // });
    dispatch({ data: ['sku', 'sku'], type: POST_IMG });
  };
}

function postProductImg(evt) {
  return new Promise(function(resolve, reject) {
    let data = new FormData(evt.currentTarget.parentNode);
    return fetch("http://localhost:8000/api/upload", {
      method: "post",
      body: data
    })
      .then(res => res.data)
      .catch(er => console.error(er));
  });
}
