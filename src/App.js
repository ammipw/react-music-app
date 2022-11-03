import React from "react"
import { Header, Footer } from './layouts';
import {Routes, Route} from 'react-router-dom'
import './style.css'
import {Top, Bottom} from "./Components";

const App = () => {

    return (
      <>
      <Header/>

        <Routes>
          <Route path="/Top" element={<Top/>}></Route>
          <Route path="/Bottom" element={<Bottom/>}></Route>
        </Routes>
        <Footer/>
      </>
    )
}

export default App
