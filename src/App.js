import React, { Component } from 'react';
import UploadContainer from './uploadContainer';

import Header from './Header'

class App extends Component {

  constructor(props) {
    super(props)
    this.getDataWithKey = this.getDataWithKey.bind(this)
  }

  getDataWithKey() {

    const data = `{
      productBySKU(sku: "10096813006") {
      name
      price
      description
      sku
      url_key
        image_url
        images_url
      }
    }
    }`
    
    fetch(`https://api.missguided.com/graphql?query=${data}`, 
    { 
      method: 'get', 
      mode: 'no-cors', 
      headers: new Headers({
        'x-api-key': 'FKWHrrSmac6f4YMKHISoz9trjC3AAjgu676IsBkE',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI3a2hlb3JicnU2azFwaXRsYmZwbDNhZmdnNSIsImV4cCI6MTUyMjg1MDA4NiwiaWF0IjoxNTIwNDMwODg2fQ.7q7fSDauKfsWcKPKZU_aoHJ-BkHEuprv9TvTOqkskes'
      })
    })  
      .then( res => console.log( 'res : ', res ))
      .catch( er => console.error( er ));
  }

  render() {
    return (
      <div className="App">
        <h1>working!</h1>
        <UploadContainer />

        { this.getDataWithKey() }
      </div>
    );
  }
}

export default App;
