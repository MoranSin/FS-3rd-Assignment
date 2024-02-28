import React, {useState, useEffect, Component} from 'react';
import { Button, Form } from 'semantic-ui-react'
import reportsServices from "../../services/reportsServices.js";
import updateIcon from "../../assets/updateIcon.png";
import './updateButton.css'

const Update = ({ report }) => {
        const [name, setName] = useState(report.name);
        const [location, setLocation] = useState(report.location);
        const [deathCount, setDeathCount] = useState(report.deathCount);
        const [damage, setDamage] = useState(report.damage);

        const [id , setId] = useState(report._id);

        useEffect(() => {
            setId(localStorage.getItem('_id'))
            setName(localStorage.getItem('name'))
            setLocation(localStorage.getItem('location'))
            setDeathCount(localStorage.getItem('deathCount'))
            setDamage(localStorage.getItem('damage'))
        }, []);

        const updateReport = () => {
            reportsServices.updateReport(report._id,{
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
            <div>
                <Form className>
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
        )
}

class UpdateReport extends Component {
        constructor(props) {
            super(props);
            this.state = { open: false }
            this.update = this.update.bind(this)
        }


        update() {
            this.props.onClick();
            this.setState(prevState => ({open: !prevState.open}))
        }

        render() {
            return (
                <div>
                    <button onClick={this.update} className="updateButton"><img className="Updateimg" src={updateIcon}/></button>
                    {this.state.open && <Update report={this.props.report} />}
                </div>
            )
        }
    }

    export default UpdateReport;
