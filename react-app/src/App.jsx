import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import 'semantic-ui-css/semantic.min.css'
import reportsServices from "./services/reportsServices.js";
import {Table} from "semantic-ui-react";
import './components/reportsCon/reportsCon.css'
import { Link, BrowserRouter } from 'react-router-dom';
import UpdateReport from "./components/updateButton/update.jsx";

function App() {
const [reports, setReports] = useState([])

useEffect(() => {

    reportsServices.getReports().then((response) => {
    setReports(response.data)
  })
}, [])

    const setReport = (id,data) => {
        let { name, location, deathCount, damage } = data;
        localStorage.setItem('_id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('location', location);
        localStorage.setItem('deathCount', deathCount);
        localStorage.setItem('damage', damage);
    }

    const onDelete = (id) => {
        reportsServices.deleteReport(id).then(() => {
            reportsServices.getReports().then((response) => {
                setReports(response.data)
            })
        })
    }

  return (
    <>
        <BrowserRouter>
        <Header />
        <ButtonList />
        <div className="reportsCon">
            <div className="labelsCon">
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell >name</Table.HeaderCell>
                            <Table.HeaderCell >location</Table.HeaderCell>
                            <Table.HeaderCell >death count</Table.HeaderCell>
                            <Table.HeaderCell >damage</Table.HeaderCell>
                            <Table.HeaderCell >update</Table.HeaderCell>
                            <Table.HeaderCell >delete</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {reports.map((report) => {
                            console.log(report)
                            return (
                                <Table.Row>
                                    <Table.Cell className="name">{report.name}</Table.Cell>
                                    <Table.Cell className="location">{report.location}</Table.Cell>
                                    <Table.Cell className="deathCount">{report.deathCount}</Table.Cell>
                                    <Table.Cell className="damage">{report.damage}</Table.Cell>
                                    {/*<Link to="/update">*/}
                                    <Table.Cell className="update">
                                        <UpdateReport onClick={()=>setReport(report._id,report)}/>
                                    </Table.Cell>
                                    <Table.Cell onClick={() => onDelete(report._id)} className="delete"><button>delete</button></Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
        </BrowserRouter>
    </>
  )
}

export default App
