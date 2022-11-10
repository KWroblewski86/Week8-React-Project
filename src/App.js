import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Workouts from './views/Workouts';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      message: {}
    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  };
  
  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  };

  render() {
    

    return (

      <Router>
        <div>
          <Nav/>
          <p className={`bg-${this.state.message.category}`}>{this.state.message.message}</p>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage}/>} />
            <Route path='/signup' element={<Signup addMessage={this.addMessage}/>} />
            <Route path='/workouts' element={<Workouts />} />


          

        
        
        
          </Routes>


          </div>
      </Router>
    )
  }
}

