import React, {useEffect, useState} from "react";
import reportsServices from "../../services/reportsServices.js";
import {Button, Form} from "semantic-ui-react";
import './updateForm.css'

const Update = ({ report, refreshReports }) => {
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
        reportsServices.updateReport(id,{
            name: name,
            location: location,
            deathCount: deathCount,
            damage: damage
        })
            .then(response => {
                console.log(response);
                refreshReports();
            })
            .catch(error => {
                console.error(error);
            });
    }

    const isFormValid = () => {
        return !name || !location || !deathCount || !damage;
    }

    return (
        <div className="formCon">
            <Form className="form">
                <Form.Field className="formField">
                    <label className="labelStyle">Name</label>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field className="formField">
                    <label className="labelStyle">Location</label>
                <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </Form.Field>
                <Form.Field className="formField">
                    <label className="labelStyle">Death Count</label>
                <input placeholder='Death Count' type='number' value={deathCount} onChange={(e) => setDeathCount(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field className="formField">
                    <label className="labelStyle">Damage</label>
                <input placeholder='Damage' value={damage} onChange={(e) => setDamage(e.target.value)}/>
                </Form.Field>
            <Button className="ButtonSubmit" onClick={updateReport} type='submit' disabled={isFormValid()}>Submit</Button>
            </Form>
        </div>
    )
}

export default Update;
