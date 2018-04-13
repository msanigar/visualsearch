import React, { Component } from "react";
import Upload from "../components/Upload";
import ProductContainer from "../components/ProductContainer";
import Header from "../components/Header";

import store from "../redux/store";
import * as actions from "../redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
		let { loading, skus, returned} = store.getState();
		this.state = {
			loading,
      skus,
			returned,
			unsubscribe: store.subscribe(this.onStoreUpdated.bind(this))
		};
	}

	componentWillUnmount() {
		this.state.unsubscribe();
  }
  
  onStoreUpdated() {
		let { loading, skus, returned } = store.getState();

		this.setState({
			loading,
      skus,
      returned
		});
	}

  render() {

    return (
      <div className="App">
        <Header name="The Stylephile" />
        <p>Upload an image to find related styles</p>
        {this.state.returned ? (
          <ProductContainer skus={this.state.skus} back={this.goBack} />
        ) : (
          <Upload forward={this.goForward} />
        )}
      </div>
    );
  }
}

export default App;
