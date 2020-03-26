import React from 'react';
import Home from './Component/Pages/Home';
import Staff from './Component/Pages/Staff';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
         <Route path="/Home" component={Home} />
        <Route path="/Staff" component={Staff} />
    </div>
    </Router>
  );
}

export default App;
