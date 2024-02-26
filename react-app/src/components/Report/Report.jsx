import React , { Component } from "react";
import './Report.css';

class Report extends Component {
    render() {
    return (
      <div className="report">
          <div className="name">Earthquake</div>
          <div className="location">Japan</div>
          <div className="deathCount">1456</div>
          <div className="damage">big</div>
      </div>
    );
  }
}

export default Report;
