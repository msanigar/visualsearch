import React, { Component } from 'react';
import UploadContainer from './uploadContainer';
import ProductContainer from './ProductContainer'
import Header from './Header'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returned: true,
      skus: []
    }
    this.goBack = this.goBack.bind(this)
    this.goForward = this.goForward.bind(this)
  }

  goBack() {
    this.setState({
      returned: false
    })
  }

  goForward(res) {
    this.setState({
      returned: true,
      skus: res
    })
  }

  render() {
    return (
      <div className="App">
        <Header name="The Stylephile" />
        <p>Upload an image to find related styles</p>
        { 
          this.state.returned ? 
          <ProductContainer skus={this.state.skus} back={this.goBack} /> : 
          <UploadContainer forward={this.goForward} />
        }
      </div>
    );
  }
}

export default App;
