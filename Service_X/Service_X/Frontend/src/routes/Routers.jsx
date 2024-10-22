import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import Calendar from '../pages/CalenderPage'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

import {Routes, Route} from 'react-router-dom'
import MyAccount from '../Dashboard/user-account/MyAccount'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctors/:id" element={<DoctorDetails/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />
    <Route path='/calender' element={<Calendar />}/>
    <Route path='/users/profile/me' element={<MyAccount />}/>

  </Routes>

}

export default Routers