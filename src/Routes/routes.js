import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../Pages/SignUp'
import Home from "../Pages/Home"

const RoutesApp = () => {
  return (
    <BrowserRouter>
          <Fragment>
               <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path='/home' element={<Home />} />
               </Routes>
          </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp
