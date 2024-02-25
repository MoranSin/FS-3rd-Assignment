import react , { Component } from 'react';
import '../ButtonList/crudButton.css'
import deleteIcon from '../../assets/deleteIcon.png'

class DeleteButton extends Component {
    render() {
        return (
        <button className="crudButton"><img src={deleteIcon}/></button>
        )
    }
}

export default DeleteButton;
