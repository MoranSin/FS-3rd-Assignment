import React, { Component , useState } from "react";
import '../ButtonList/crudButton.css'
import updateIcon from "../../assets/updateIcon.png";
import '../addButton/createForm.css';
import ReportsService from '../../services/reportsServices.js'

import { Button, Form } from 'semantic-ui-react'


const Update = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [deathCount, setDeathCount] = useState(0);
    const [damage, setDamage] = useState('');

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
                <Button onClick={ReportsService.updateReport} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
class UpdateButton extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false }
        this.update = this.update.bind(this)

    }
    update() { this.setState(prevState => ({open: !prevState.open})) }

    render() {
        return <button className="crudButton btn"><img src={updateIcon}/></button>;
        {this.state.open && <Update />}
    }
}

export default UpdateButton;
