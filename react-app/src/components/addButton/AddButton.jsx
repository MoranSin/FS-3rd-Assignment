import React, {Component, useEffect, useState} from 'react';
import '../ButtonList/crudButton.css'
import addIcon from '../../assets/addIcon.png'
import './createForm.css'
import { Button, Form } from 'semantic-ui-react'
import reportsServices from "../../services/reportsServices.js";


const Create = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [deathCount, setDeathCount] = useState(0);
    const [damage, setDamage] = useState('');

    const createReport = () => {
        reportsServices.createReport({
            name: name,
            location: location,
            deathCount: deathCount,
            damage: damage
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }

return(
    <div className="formCon">
    <Form className="form">
        <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Location</label>
            <input placeholder='Location' onChange={(e) => setLocation(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Death Count</label>
            <input placeholder='Death Count' onChange={(e) => setDeathCount(parseInt(e.target.value))}/>
        </Form.Field>
        <Form.Field>
            <label>Damage</label>
            <input placeholder='Damage' onChange={(e) => setDamage(e.target.value)}/>
        </Form.Field>
        <Button onClick={createReport} type='submit'>Submit</Button>
    </Form>
    </div>
)
}
class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
        this.create = this.create.bind(this)
    }

    create() { this.setState(prevState => ({open: !prevState.open})) }
    render() {
        return (
        <div>
        <button onClick={this.create} className="crudButton btn"><img src={addIcon}/></button>
        {this.state.open && <Create />}
        </div>
        )
    }
}

export default AddButton;
