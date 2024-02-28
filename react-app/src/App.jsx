import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import 'semantic-ui-css/semantic.min.css'
import reportsServices from "./services/reportsServices.js";
import {Table} from "semantic-ui-react";
import './components/reportsCon/reportsCon.css'
import UpdateReport from "./components/updateButton/update.jsx";

function App() {
const [reports, setReports] = useState([])

useEffect(() => {

    reportsServices.getReports().then((response) => {
    setReports(response.data)
  })
}, [])

    const refreshReports = () => {
        reportsServices.getReports().then((response) => {
            setReports(response.data)
        })
    }

    const setReport = (data) => {
        let {id, name, location, deathCount, damage } = data;
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
                            return (
                                <Table.Row key={report._id}>
                                    <Table.Cell className="name">{report.name}</Table.Cell>
                                    <Table.Cell className="location">{report.location}</Table.Cell>
                                    <Table.Cell className="deathCount">{report.deathCount}</Table.Cell>
                                    <Table.Cell className="damage">{report.damage}</Table.Cell>
                                    <Table.Cell className="update">
                                        <UpdateReport report={report} onClick={()=>setReport(report)} refreshReports={refreshReports}/>
                                    </Table.Cell>
                                    <Table.Cell onClick={() => onDelete(report._id)} className="delete"><button>delete</button></Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    </>
  )
}

export default App
