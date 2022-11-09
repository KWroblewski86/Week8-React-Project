import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Workouts from './views/Workouts';


export default class App extends Component {
  

  render() {
    

    return (

      <Router>
        <div className="homepage">
          <Nav/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/workouts' element={<Workouts />} />


          

        
        
        
          </Routes>



        </div>
      </Router>
    )
  }
}

