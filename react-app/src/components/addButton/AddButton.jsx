import React , { Component } from 'react';
import '../ButtonList/crudButton.css'
import addIcon from '../../assets/addIcon.png'

class AddButton extends Component {
    render() {
        return (
        <button className="crudButton btn"><img src={addIcon}/></button>
        )
    }
}

export default AddButton;
