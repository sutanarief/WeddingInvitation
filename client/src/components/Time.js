import React from "react";

const style = {
  background:
    "linear-gradient(90deg, rgba(253,253,255,1) 0%, rgba(253,253,255,1) 51%, rgba(253,253,255,1) 100%)",
  width: "100%",
};

const Time = () => {
  return (
    <>
      <div className="time-container">
        <div className="time__box">
          <span className="time__number">01</span>
        </div>
        <div className="time__box">
          <span className="time__number">02</span>
        </div>
        <div className="time__box">
          <span className="time__number">03</span>
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
      </div>
    </>
  );
};

export default Time;
