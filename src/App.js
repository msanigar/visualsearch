import React, { Component } from 'react';
import UploadContainer from './uploadContainer';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="The Stylephile" />
        <p>Upload an image to find related styles</p>
        <UploadContainer />
      </div>
    );
  }
}

export default App;
