import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      user: null,
      workout_enthusiasts: 0,
      name: 'Kyle',
      age: 25
    }

    console.log('construction is done')
  }

  componentDidMount = () => {
    console.log('first rendering is completed')
  }

  numberGrowth = () => {
    console.log('button is clicked')
    this.setState({workout_enthusiasts: this.state.workout_enthusiasts + 1})
  }

  render() {
    console.log('rendering is about to happen')

    return (
      <div className="homepage">
        <Nav/>


        <h1 className>Hey There Workout Enthusiasts</h1>
        <h3>My name is {this.state['name']} and I'm {this.state.age} </h3>
        <h4>Give this button a click if you're a workout enthusiast!</h4>
        <p>Here is our number of workout enthusiats {this.state['workout_enthusiasts']} </p>
        <button onClick={this.numberGrowth} >Add to Workout Enthusiasts </button>

      </div>
    )
  }
}

