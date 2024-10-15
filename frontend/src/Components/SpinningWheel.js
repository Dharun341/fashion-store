import React, { useState } from 'react';
import './wheel.css'; // Import the CSS

const SpinningWheel = () => {
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      const randomDegree = Math.floor(Math.random() * 360) + 360 * 5; // Spin 5 full circles + random
      setAngle(prev => prev + randomDegree);

      setTimeout(() => {
        setIsSpinning(false);
      }, 5000); // Assume 5 seconds spin duration
    }
  };

  return (
    <div className="wheel-container">
      {/* Pointer centered in the wheel, pointing upward */}
      <div className="pointer"></div>

      <div 
        className={`wheel ${isSpinning ? 'spinning' : ''}`}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="wheel-segment">Segment 1</div>
        <div className="wheel-segment">Segment 2</div>
        <div className="wheel-segment">Segment 3</div>
        <div className="wheel-segment">Segment 4</div>
        <div className="wheel-segment">Segment 5</div>
        <div className="wheel-segment">Segment 6</div>
      </div>
      
      <button onClick={spinWheel} disabled={isSpinning} className="spin-button">
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default SpinningWheel;
