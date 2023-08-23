import './App.css';
//use uppercase for component names 
import Banner from './bannerComponent';
import ExhibitComponent from './exhibitComponent';

function App() {
  return (
    <div className="App">
      <Banner/>
      <ExhibitComponent className = 'exhibit'>
        <h1>Exhibit</h1>
        <p>hello exhibit</p>
        </ExhibitComponent>
        <ExhibitComponent>
          <h1>Exhibit2</h1>
          <p>blah blah blah</p>
        </ExhibitComponent>
        
    </div>
  );
}

export default App;
