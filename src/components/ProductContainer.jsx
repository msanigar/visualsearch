import React, { Component } from "react";

import store from "../redux/store";
import { resetApp } from "../redux/actions";

export default class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skus: this.props.skus
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    store.dispatch(resetApp());
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>go again?</button>
        <div className="images">
          {this.state.skus.map((sku, i) => (
            <div key={sku + i}>
              <img
                src={`https://media.missguided.com/s/missguided/${sku}_set`}
                alt="Product"
              />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
