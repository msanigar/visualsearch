import React, { Component } from 'react';
import Upload from './upload';

export default class UploadContainer extends Component {
    constructor(){
        super();
        this.state = {
            url : 'http://localhost:8000/api/upload'
        };
    }

    evtChange_upload( evt ){

        let data = new FormData( evt.currentTarget.parentNode );

        fetch( this.state.url, { method : 'post', body : data })
            .then( res => console.log( 'res : ', res ))
            .catch( er => console.error( er ));

    }

    render(){
        return <Upload url={this.state.url} handleChange={this.evtChange_upload.bind(this)} />;
    }

};