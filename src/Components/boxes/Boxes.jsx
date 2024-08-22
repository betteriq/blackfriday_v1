import React, { useState, useEffect } from "react";
import "./Boxes.css";
const Boxes = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const { days, hours, minutes, seconds } = timeLeft;

      if (seconds > 0) {
        setTimeLeft((prevTime) => ({ ...prevTime, seconds: seconds - 1 }));
      } else if (minutes > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          minutes: minutes - 1,
          seconds: 59,
        }));
      } else if (hours > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          hours: hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (days > 0) {
        setTimeLeft((prevTime) => ({
          ...prevTime,
          days: days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timeLeft]);

  return (
    <div className="boxes">
      <div className="box">
        <h1>{timeLeft.days} </h1>
        <p>Days</p>
      </div>
      <div className="box">
        <h1>{timeLeft.hours} </h1>
        <p>Hours</p>
      </div>
      <div className="box">
        <h1>{timeLeft.minutes}</h1>
        <p>Minutes</p>
      </div>
      <div className="box">
        <h1>{timeLeft.seconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Boxes;
