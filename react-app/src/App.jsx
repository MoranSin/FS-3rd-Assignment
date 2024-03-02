import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import reportsServices from "./services/reportsServices.js";
import {Item} from "semantic-ui-react";
import UpdateReport from "./components/updateButton/update.jsx";
import {Grid} from "@mui/material";
import DeleteButton from "./components/deleteButton/deleteButton.jsx";
// import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

function App() {
const [reports, setReports] = useState([])

    const [formIsOpen, setFormIsOpen] = useState(false)
    const [openReportId, setOpenReportId] = useState(null);
const [buttonClicked, setButtonClicked] = useState(false)

    const handleClick = () => {
        setButtonClicked(true)
    }

    const openForm = (id) => {
        setFormIsOpen(true)
        setOpenReportId(id)
    }

    const closeForm = () => {
        setFormIsOpen(false)
        setOpenReportId(null)
    }



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
        <div className={`reportsCon ${buttonClicked ? 'buttonClicked' : ''}`} >
            <div className="labelsCon">
                <Grid container spacing={1}>
                    <Grid item xs={6} md={2}>
                        <Item className="label">name</Item>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Item className="label">location</Item>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Item className="label">death count</Item>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Item className="label">damage</Item>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Item className="label">update</Item>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Item className="label">delete</Item>
                    </Grid>
                </Grid>
            </div>
                        {reports.map((report) => {
                            return (
                                <Grid className="report" key={report._id}  container spacing={1}>
                                    <Grid item xs={6} md={2}>
                                        <Item className="reportItem">{report.name}</Item>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <Item className="reportItem">{report.location}</Item>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <Item className="reportItem">{report.deathCount}</Item>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <Item className="reportItem">{report.damage}</Item>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <UpdateReport formisOpen={formIsOpen} openReportId={openReportId} closeForm={closeForm} openForm={openForm} report={report} onClick={()=>{setReport(report);}} refreshReports={refreshReports}/>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                     <DeleteButton onClick={() => onDelete(report._id)} className="delete"></DeleteButton>
                                    </Grid>
                                </Grid>
                            )
                        })}
            </div>
    </>
  )
}

export default App
