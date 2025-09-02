import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('Timer started');
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  }, []);

  return (
    <div>
      Timer: {seconds} 
    </div>
  );
};

export default Timer;
