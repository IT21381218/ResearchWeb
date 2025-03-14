// Import the spinner from 'ldrs'
import React, { useState, useEffect } from "react";
import { cardio } from "ldrs";
import "./styles/LoadingScreen.css";

// Register the cardio component
cardio.register();

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = [
      "https://res.cloudinary.com/dwcxwpn7q/video/upload/v1740303225/low_quality_mntplm.mp4",
      "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737913718/cattle%20site/top2_jq9sz1.png",
      "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737917080/cattle%20site/phone2_c21kgg.png",
      // "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737919875/cattle%20site/823045008417489391_dtr6qh.png",
      // "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737920686/cattle%20site/823123765232872001_loa6mr.png",
      // "https://res.cloudinary.com/dwcxwpn7q/image/upload/v1737920243/cattle%20site/823122485332586303_ea9jzl.png",
    ];

    const preloadAssets = async () => {
      for (let i = 0; i < assets.length; i++) {
        await new Promise((resolve) => {
          const isVideo = assets[i].endsWith(".mp4") || assets[i].endsWith(".mov");
          const element = isVideo ? document.createElement("video") : new Image();
          element.onload = element.oncanplaythrough = resolve;
          element.onerror = resolve; // Handle errors gracefully
          element.src = assets[i];
        });
        setProgress(Math.round(((i + 1) / assets.length) * 100));
      }
      onLoaded();
    };

    preloadAssets();
  }, [onLoaded]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <l-cardio size="100" stroke="4" speed="2" color="#f2f7f4"></l-cardio>
        <h1>Loading... {progress}%</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
