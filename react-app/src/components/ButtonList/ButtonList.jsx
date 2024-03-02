import react, {Component, useState} from 'react';
import './ButtonList.css'
import AddButton from '../addButton/AddButton'
import FindButton from '../findButton/findButton'
import Update from '../updateButton/updateForm.jsx'

const [formIsOpen, setFormIsOpen] = useState(false)
const onOpenForm = (isOpen) => {
    setFormIsOpen(isOpen);
}
class ButtonList extends Component {

    render() {
        return (
        <div className="buttonList">
            <AddButton onFormOpen={onOpenForm}/>
            <FindButton />
        </div>
        )
    }
}

export default ButtonList;
