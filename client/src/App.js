import React from 'react'
import Chatbot from './component/Chatbot'
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Username from './components/Username';
import Dasboard from './pages/Dasboard';
import Newss from './pages/Newss';
import Govschemee from './pages/Govschemee';
import Myassets from './pages/Myassets';
import CreateItem from './pages/Createitem';
import CreatorDashboard from './pages/Creatordashboard';
import Home from './pages/Home';
 
import Comments from "./comments/Comments";
import Password from './components/Password';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';


import { AuthorizeUser, ProtectRoute } from './middleware/auth'


export default function App(location) {
    
// const showHeader = router.pathname === ('/' || '/password' || '/register') ? false : true;

  return (
    <Router>
      
      <Chatbot/>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Username/>} />
        <Route path="/password" element={<ProtectRoute><Password /></ProtectRoute>} />
        <Route exact path="/home" element={<><Navbar/><Dasboard/></>}/>
        <Route exact path="/govschemee" element={<><Navbar/><Govschemee/></>}/>
        <Route exact path="/chat" element={<><Navbar/><Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      /></>}/>
        <Route exact path="/newss" element={<><Navbar/><Newss/></>}/>
        <Route exact path="/Dasboard" element={<><Navbar/><Home/></>}/>
        <Route exact path="/my-assets" element={<><Navbar/><Myassets/></>}/>
        <Route exact path="/create-item" element={<><Navbar/><CreateItem/></>}/>
        <Route exact path="/creatordashboard" element={<><Navbar/><CreatorDashboard/></>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/profile" element={<AuthorizeUser><Profile /></AuthorizeUser>}/>
        <Route exact path="/recovery" element={<Recovery/>}/>
        <Route exact path="/reset" element={<Reset/>}/>
        <Route exact path="*" element={<PageNotFound/>}/>

      </Routes>

     
    </Router>
  )
}
