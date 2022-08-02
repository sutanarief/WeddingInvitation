import React from "react";
import { Col, Card } from "react-bootstrap";

const style = {
  width: "300px",
  height: "300px",
  backgroundColor: "rgba(255,255,255,0.5)",
  borderRadius: "50%",
  // borderTopLeftRadius: "600px",
  // borderTopRightRadius: "600px",
  boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.1)",
  paddingTop: "60px",
  alignContent: "center",
};

const styles = {
  background:
    "linear-gradient(0deg, rgba(253,253,255,0) 0%, rgba(253,253,255,0) 51%, rgba(253,253,255,0.5) 100%)",
  width: "100%",
  top: "0",
};

const Date = () => {
  return (
    <>
    {/* <Col> */}
      <div style={style}>
        <div className="date-text">Save the date</div>
        <div className="date">18 September 2022</div>
      </div>
      {/* <div style={styles} className="d-flex">
        <div className="date-box">3</div>
        <div className="date-box">24</div>
        <div className="date-box">30</div>
      </div> */}
    {/* </Col> */}
    </>
  );
};

export default Date;
