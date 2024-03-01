import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import reportsServices from "../../services/reportsServices.js";

const FormComponent = ({ report, refreshReports, isUpdate }) => {
    const [name, setName] = useState(report ? report.name : '');
    const [location, setLocation] = useState(report ? report.location : '');
    const [deathCount, setDeathCount] = useState(report ? report.deathCount : '');
    const [damage, setDamage] = useState(report ? report.damage : '');

    useEffect(() => {
        if (report) {
            setName(report.name);
            setLocation(report.location);
            setDeathCount(report.deathCount);
            setDamage(report.damage);
        }
    }, [report]);

    const handleSubmit = () => {
        const reportData = {
            name: name,
            location: location,
            deathCount: deathCount,
            damage: damage
        };

        if (isUpdate) {
            reportsServices.updateReport(report._id, reportData)
                .then(response => {
                    refreshReports();
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            reportsServices.createReport(reportData)
                .then(response => {
                    refreshReports();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

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
                    <input placeholder='Death Count' value={deathCount}
                           onChange={(e) => setDeathCount(parseInt(e.target.value))}/>
                </Form.Field>
                <Form.Field className="formField">
                    <label className="labelStyle">Damage</label>
                    <input placeholder='Damage' value={damage} onChange={(e) => setDamage(e.target.value)}/>
                </Form.Field>
                <Button className="ButtonSubmit" onClick={updateReport} type='submit'>Submit</Button>
            </Form>
        </div>
        // <div className="formCon">
        //     <Form className="form" onSubmit={handleSubmit}>
        //         {/* Form fields here */}
        //         <Button className="ButtonSubmit" type='submit'>Submit</Button>
        //     </Form>
        // </div>
    );
};

export default FormComponent;
