import react, {Component, useState} from 'react';
import './ButtonList.css'
import AddButton from '../addButton/AddButton'
import FindButton from '../findButton/findButton'
import Update from '../updateButton/updateForm.jsx'

class ButtonList extends Component {

    render() {
        return (
        <div className="buttonList">
            <AddButton/>
            <FindButton />
        </div>
        )
    }
}

export default ButtonList;
