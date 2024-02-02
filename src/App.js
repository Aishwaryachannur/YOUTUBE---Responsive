import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video from './components/Video'
import { Provider } from "react-redux";
import store from "./Layout/Stores";

import Pagenotfound from './components/Pagenotfound'
import Watch from './components/Watch'
import Navbar from './Layout/Navbar'
import Vvideo1 from './components/Vvideo1';

function App() {
  return (
    <div>
      
      
      <Provider store={store}>
      <div>
       <Navbar/>
       
       <Vvideo1/>
       
       
      </div>
     
      
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Video/>} />
        <Route path='/watch' element={<Watch/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path='/uselect' element={<uselect/>}/>
        <Route path='/choose' element={<choose/>}/>



      </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  )
}

export default App