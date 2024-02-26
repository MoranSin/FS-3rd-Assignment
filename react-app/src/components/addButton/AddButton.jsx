import React , { Component } from 'react';
import '../ButtonList/crudButton.css'
import addIcon from '../../assets/addIcon.png'
import './createForm.css'

import { Button, Form } from 'semantic-ui-react'


const Create = () => (
    <div className="formCon">
    <Form>
        <Form.Field>
            <label>Name</label>
            <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
            <label>Location</label>
            <input placeholder='Location' />
        </Form.Field>
        <Form.Field>
            <label>Death Count</label>
            <input placeholder='Death Count' />
        </Form.Field>
        <Form.Field>
            <label>Damage</label>
            <input placeholder='Damage' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
    </div>
)
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
