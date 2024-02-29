import react , { Component } from 'react';
import '../ButtonList/crudButton.css'
import deleteIcon from '../../assets/deleteIcon.png'
import './deleteButton.css'

class DeleteButton extends Component {
    render() {
        return (
        <button className="deleteButton"><img className="Deleteimg" src={deleteIcon}/></button>
        )
    }
}

export default DeleteButton;
