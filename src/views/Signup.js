import React, { Component } from 'react'

export default class Signup extends Component {

  sendSignUpInfo = async (e) => {
    e.preventDefault();

    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const password2 = e.target.password2.value

    if (password !== password2) {
      console.log("passwords don't match")
      return
    }

    const res = await fetch('http://localhost:5000/api/signup', {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }),
        headers: {
          "Content-Type": 'application/json'
        }
    });
    const data = await res.json();
    if (data.status==='ok'){
      this.props.addMessage(data.message, 'success')
    }
  }


  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={(e) => { this.sendSignUpInfo(e) }}>
          <input placeholder="Username" name="username" className="form-control" type="text" />
          <input placeholder="Email" name="email" className="form-control" type="email" />
          <input placeholder="Password" name="password" className="form-control" type="password" />
          <input placeholder="Confirm Password" name="password2" className="form-control" type="password" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
