import './banner.css'
import React, { Component } from 'react';

class bannerComponent extends Component {
  render(){
    return(
      <div className = 'banner' >
        <h1>{this.props.bannerText}</h1>
      </div>
    );
  }
}

export default bannerComponent;