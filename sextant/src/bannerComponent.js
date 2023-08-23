import React, { Component } from 'react';

class bannerComponent extends Component {
  render(){
    return(
      <div >
        <h1>{this.props.bannerText}</h1>
      </div>
    );
  }
}

export default bannerComponent;