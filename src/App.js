import React, { Component } from 'react';
import UploadContainer from './uploadContainer';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="IMAGE SEARCH" />
        <h1>working!</h1>
        <UploadContainer />
      </div>
    );
  }
}

export default App;
