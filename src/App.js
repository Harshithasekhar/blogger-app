import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/topbar/Navbar'
import Write from './pages/write/Write'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Single from './pages/single/Single';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const user=false
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" exact element={<Home/>}></Route> 
   <Route path="/register"  element={user?<Home/>:<Register/>}></Route> 
   <Route path="/login"  element={user?<Home/>:<Login/>}></Route> 
   <Route path="/settings"  element={user?<Settings/>:<Register/>}></Route> 
   <Route path="/write"  element={user?<Write/>:<Register/>}></Route> 
   <Route path="/post/:postId"  element={<Single/>}></Route> 
   <Route path="/single"  element={<Single/>}></Route> 
   <Route path="/sidebar"  element={<Sidebar/>}></Route> 
   </Routes>
   </BrowserRouter>
  )
}

export default App
