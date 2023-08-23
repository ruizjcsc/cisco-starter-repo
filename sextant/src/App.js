import './App.css';
import React,{Component} from 'react';
//use uppercase for component names 
import Banner from './bannerComponent';
import ExhibitComponent from './exhibitComponent';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Banner bannerText = "Sextant"></Banner>
        <ExhibitComponent name = "Exhibit One"><p>blah blah blah</p></ExhibitComponent>
        <ExhibitComponent name = "Exhibit two"><p>blah blah</p></ExhibitComponent>
      </div>
    );
  }
}

export default App;
