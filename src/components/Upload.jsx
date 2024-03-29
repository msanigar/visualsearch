import React, { Component } from "react";

import store from "../redux/store";
import { postImg, loading } from "../redux/actions";
import Arrow from "../arrow.svg";

export default class Upload extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
    store.dispatch(loading(true));
    store.dispatch(postImg(evt.currentTarget.parentNode));
  }

  dropHandler( evt ){
    evt.preventDefault();
    let data = new FormData(evt.currentTarget);
    data.append( 'photo', evt.dataTransfer.files[0] );
    store.dispatch(loading(true));
    store.dispatch(postImg(data));
  }

  render() {
    return (
      <form encType="multipart/form-data" method="post" id="upload-form" onDrop={this.dropHandler}>
        <label className="file-upload" htmlFor="file-upload">
          <Arrow fill="pink" />
        </label>
        <input
          onChange={this.handleChange.bind(this)}
          type="file"
          id="file-upload"
          name="photo"
          className="file-upload-input"
          multiple=""
        />
      </form>
    );
  }
}
