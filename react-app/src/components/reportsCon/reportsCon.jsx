import React, { Component } from "react";
import "./reportsCon.css";

class ReportsCon extends Component {
    render() {
    return (
      <div className="reportsCon">
          <div className="labelsCon">
          <div className="label">name</div>
          <div className="label">location</div>
          <div className="label">death count</div>
          <div className="label">damage</div>
          </div>
      </div>
    );
  }
}

export default ReportsCon;
