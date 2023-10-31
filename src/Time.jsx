import React, { useState, useEffect } from 'react';

function Time() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentDate]);

  const formattedDate = currentDate.toLocaleString();

  return (
    <div>
      <h1>Dynamic Date</h1>
      <p>Current Date and Time: {formattedDate}</p>
    </div>
  );
}


export default Time