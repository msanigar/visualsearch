import React, { Component } from 'react';

export default class ProductContainer extends Component {
    constructor(){
        super();
        this.state = {
            skus : ['DE911264', 'DE911264', 'DE911264'] // this.props.skus
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.back()
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>go again?</button>
                <div className="images">
                    { this.state.skus.map( sku => 
                        <div><img src={`https://media.missguided.com/s/missguided/${sku}_set`} /> </div>
                    )}
                </div>
            </div>
        )
    }

};