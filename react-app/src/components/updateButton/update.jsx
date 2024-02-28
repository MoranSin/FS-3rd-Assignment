import React, {useState, useEffect, Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import reportsServices from "../../services/reportsServices.js";
import { Route, Router } from 'react-router-dom';
import '../addButton/createForm.css';
import addIcon from "../../assets/addIcon.png";

const Update = () => {
        const [name, setName] = useState('');
        const [location, setLocation] = useState('');
        const [deathCount, setDeathCount] = useState(0);
        const [damage, setDamage] = useState('');

        const [id , setId] = useState(null);

        useEffect(() => {
            setId(localStorage.getItem('_id'))
            setName(localStorage.getItem('name'))
            setLocation(localStorage.getItem('location'))
            setDeathCount(localStorage.getItem('deathCount'))
            setDamage(localStorage.getItem('damage'))
        }, []);

        const updateReport = () => {
            reportsServices.updateReport(id,{
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
            <Router>
            <Route path="/update">
            <div className="formCon">
                <Form className="form">
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Death Count</label>
                        <input placeholder='Death Count' value={deathCount} onChange={(e) => setDeathCount(parseInt(e.target.value))}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Damage</label>
                        <input placeholder='Damage' value={damage} onChange={(e) => setDamage(e.target.value)}/>
                    </Form.Field>
                    <Button onClick={updateReport} type='submit'>Submit</Button>
                </Form>
            </div>
            </Route>
            </Router>
        )
}

class UpdateReport extends Component {
        constructor(props) {
            super(props);
            this.state = { open: false }
            this.update = this.update.bind(this)
        }

        update() { this.setState(prevState => ({open: !prevState.open})) }
        render() {
            return (
                <div>
                    <button onClick={this.update} className="crudButton btn"><img src={addIcon}/></button>
                    {this.state.open && <Update />}
                </div>
            )
        }
    }

    export default UpdateReport;
