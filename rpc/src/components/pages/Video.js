import React from 'react';
import videoBackground from './videofile.mp4'

function App() {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;



