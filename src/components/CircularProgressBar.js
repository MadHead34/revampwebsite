import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ percentage, number }) => {
  const circleRadius = 15.9155; 
  const strokeDashArray = `${percentage}, 100`;

  return (
    <svg viewBox="0 0 36 36" className="circular-chart">
      <path
        className="circle"
        strokeDasharray={strokeDashArray}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text
        x="18" 
        y="20.35" 
        className="percentage"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {number}
      </text>
    </svg>
  );
};

export default CircularProgressBar;