import React, { useState, useEffect } from "react";

const style = {
  background:
    "linear-gradient(90deg, rgba(253,253,255,1) 0%, rgba(253,253,255,1) 51%, rgba(253,253,255,1) 100%)",
  width: "100%",
};

const Time = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const countDownDate = new Date("Sept 18, 2022 08:00:00").getTime();
  const getTimeUntil = () => {
    let nowDate = new Date().getTime();
    let timeLeft = countDownDate - nowDate;

    if (timeLeft < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeLeft / 1000 / 60) % 60));
      setSeconds(Math.floor((timeLeft / 1000) % 60));
    }
  };

  const formatter = (num) => {
    return num < 10 ? "0" + num : num;
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(), 1000);
  }, []);
  return (
    <>
      <div className="time-container">
        <div className="time__box">
          <span className="time__number">{formatter(days)}</span>
        </div>
        <div className="time__box">
          <span className="time__number">{formatter(hours)}</span>
        </div>
        <div className="time__box">
          <span className="time__number">{formatter(minutes)}</span>
        </div>
        <div className="time__box">
          <span className="time__number">{formatter(seconds)}</span>
        </div>
      </div>
      <div className="time-container">
        <div className="time__date">
          <span className="text__date">Days</span>
        </div>
        <div className="time__date">
          <span className="text__date">Hours</span>
        </div>
        <div className="time__date">
          <span className="text__date">Minutes</span>
        </div>
        <div className="time__date">
          <span className="text__date">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default Time;
