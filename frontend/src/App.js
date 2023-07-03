import React from 'react'
import "./App.css"    // This is related to the tailwind CSS file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage, SignupPage} from "./Routes.js"

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/Signup" element={<SignupPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App