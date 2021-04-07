import React, { Component } from "react";
import "./page.css";
import honey from "../component/Info/images/honey.jpg";
import Infocard from "../component/Info/InfoCard";



class Info extends Component {
  render() {
    return (
      <div className="Info myttf">
        <div
          style={{
            backgroundImage: `url("${honey}")`,
            height: "300px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            marginBottom: "50px",
            position: "relative",
          }}
          className="Infoouter"
        >
          <p className="Infomid" style={{ color: "white", fontSize:"40px" }}>
            {" "}
            꿀팁을 드려요{" "}
          </p>
        </div>
        <Infocard />
      </div>
    );
  }
}

export default Info;
