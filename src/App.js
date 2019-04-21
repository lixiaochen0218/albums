import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Albums from './components/Albums'
import Photos from './components/Photos'

function App() {
  return (
    <Router>
      <div> 
        <Route exact path="/" component={Albums}/>
        <Route path="/albums" component={Albums}/>
        <Route path="/photos/:aid" component={Photos}/>
      </div> 
    </Router>
  );
}


export default App;
