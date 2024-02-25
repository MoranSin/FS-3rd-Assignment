import React, { Component } from "react";
import '../ButtonList/crudButton.css'
import updateIcon from "../../assets/updateIcon.png";

class UpdateButton extends Component {
    render() {
        return <button className="crudButton"><img src={updateIcon}/></button>;
    }
}

export default UpdateButton;
