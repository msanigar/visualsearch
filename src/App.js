import React, { Component } from 'react';
import UploadContainer from './uploadContainer';
import axios from 'axios'

import Header from './Header'

class App extends Component {

  constructor(props) {
    super(props)
    this.renderProducts = this.renderProducts.bind(this)
  }

  renderProducts() {
    const skus = ['DE911264', 'DE911264', 'DE911264']
                
    skus.map(sku => {
      fetch(`https://media.missguided.com/s/missguided/${sku}_set`)
      .then( res => console.log( 'res : ', res ))
      .catch( err => console.error( err )); 
    })
  }

  render() {
    return (
      <div className="App">
        <Header name={'APP'}/>
        <UploadContainer />
        { this.renderProducts() }
      </div>
    );
  }
}

export default App;
