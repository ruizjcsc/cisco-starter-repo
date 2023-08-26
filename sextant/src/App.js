import './App.css';
import React,{Component} from 'react';
//use uppercase for component names 
import Banner from './bannerComponent';
import ExhibitComponent from './exhibitComponent';
import AddressRequest from './addressRequest'
import LatencyComponent from './latencyComponent'

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Banner bannerText = "Sextant"></Banner>
        <ExhibitComponent name = "IPV4 address"><p><AddressRequest addressType = "ipv4"/></p></ExhibitComponent>
        <ExhibitComponent name = "IPV6 address"><p><AddressRequest addressType = "ipv6"/></p></ExhibitComponent>
        <ExhibitComponent name = "Latency"><p><LatencyComponent/></p></ExhibitComponent>
        
      </div>
    );
  }
}

export default App;
