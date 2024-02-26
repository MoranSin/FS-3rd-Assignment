import React, { Component , useState } from "react";
import '../ButtonList/crudButton.css'
import updateIcon from "../../assets/updateIcon.png";
import ReportsService from "../../services/reportsServices";

class UpdateButton extends Component {
    render() {
        return <button className="crudButton btn"><img src={updateIcon}/></button>;
    }
}

export default UpdateButton;
