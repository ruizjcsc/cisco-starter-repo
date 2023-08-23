import './exhibit.css'
import React, { Component } from 'react';


class exhibitComponent extends Component {
    render(){
        return (
            <div className = 'layout'>
                <h2 className="ExhibitHeading">{this.props.name}</h2>
                <div className="ExhibitContent">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default exhibitComponent;
