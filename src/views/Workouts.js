import React, { Component } from 'react'

export default class Workouts extends Component {

    state = {
        todoList: []
    }
    



  render() {



    return (
          <>  
            <div className="container">
            <div className="row">
                    <div className="workout">
                        <h1>Workout To Do's</h1>
                    </div>
                </div>
            </div>
            <div>
            <form className="mb-3" onSubmit={this.handleSubmit}>
                <div className="input-group">
                <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autocomplete="off" />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-primary">Add</button>
                    </div>
                </div>
            </form>
            <ul className="list-group">
                {
                    this.state.todoList.map(
                        (item, index) =>{
                            return <li className="list-group-item" key={index}>
                                {item}
                                <button className="btn btn-sm btn-outline-success justify-content-md-end" onClick={(event) => {this.deleteTodoTask(event,index)}}>Task Completed</button>
                            </li>
                        }
                    )
                }
            </ul>
            </div>


        </>    

    );
  }

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0) {
        this.setState({
            todoList:[...this.state.todoList, taskDesc]
        })
        event.target.reset();
    }
    event.preventDefault();
  }
  
  deleteTodoTask(event, index) {
    var taskArray = [...this.state.todoList]
    taskArray.splice(index,1)
    this.setState({todoList:taskArray})
  }
}
