import React from "react"
import { Header, Footer } from './layouts';
import {Routes, Route} from 'react-router-dom'
import './style.css'
import {Top, Bottom} from "./Components";
import { SongProvider } from "./SongContext";

const App = () => {

    return (
      <>
      <Header/>
        <SongProvider>
          <Routes>
            <Route path="/Top" element={<Top/>}></Route>
            <Route path="/Bottom" element={<Bottom/>}></Route>
          </Routes>
        </SongProvider>
        <Footer/>
      </>
    )
}

export default App
