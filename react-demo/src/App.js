import React, { useEffect } from 'react';
import './App.css';
// import init from './d3.1';
import init2 from './d3.2';
// import init3 from './d3.3';

function App() {

  useEffect(() => {
    // init();
    // setTimeout(() => {
      init2();
    // }, 1000);
    // init3();
  }, [])

  return (
    <div className="App">
      <svg height="600" width="900"></svg>
    </div>
  );
}

export default App;
