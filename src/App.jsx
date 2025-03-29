import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Trending from './components/Trending';
import RightBar from "./components/RightBar";
import Notifications from "./components/Notifications"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Routes>
        
        <Route path="/" element={!isAuthenticated ? (<AdminPage setIsAuthenticated={setIsAuthenticated} />) : (<Navigate to="/main" />)}/>

        <Route path="/main" element={
          isAuthenticated ? (
              <>
                <Navbar />
                <Card />
                <Slider />
                <RightBar/>
                <Trending/>
                <Notifications/>
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>
    </>
  );
}

export default App;
