import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import ButtonList from "./components/ButtonList/ButtonList.jsx";
import ReportsCon from "./components/reportsCon/reportsCon.jsx";


function App() {
    // this.state = { editing: false }

  return (
    <>
        <Header />
        <ButtonList />
        <ReportsCon />
    </>
  )
}

export default App
