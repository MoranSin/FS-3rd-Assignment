import react , { Component } from 'react';
import './ButtonList.css'
import AddButton from '../addButton/AddButton'
import DeleteButton from '../deleteButton/deleteButton'
import FindButton from '../findButton/findButton'
import UpdateButton from '../updateButton/updateButton'

class ButtonList extends Component {
    render() {
        return (
        <div className="buttonList">
            <AddButton />
            <UpdateButton />
            <FindButton />
            <DeleteButton />
        </div>
        )
    }
}

export default ButtonList;
