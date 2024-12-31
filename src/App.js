// App is the navigation
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Home/NavBar';
import Home from './Pages/Home/HomeScreen';


function App() {
  return (
    <div className="App"> 
      <Router>
        <div>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
          </Routes>

          <Routes>
              <Route path="*" element={<div>404 Not Found</div>}/>
          </Routes>
          

        </div>
      </Router>

    </div>
  );
}

export default App;
