import React, { Component } from "react";
import '../ButtonList/crudButton.css'
import findIcon from "../../assets/findIcon.png";

class findButton extends Component {
    render() {
        return <button className="crudButton"><img src={findIcon}/></button>;
    }
}

export default findButton;
