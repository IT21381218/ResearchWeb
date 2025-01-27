import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import LoadingScreen from "./component/LoadingScreen";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      {isLoaded && (
        <div className="app-container">
          {/* Background video */}
          <video className="background-video" autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dwcxwpn7q/video/upload/v1733940890/eehanee/1_xuwm2i.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* App content */}
          <div className="content">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
