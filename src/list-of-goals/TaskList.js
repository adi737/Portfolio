import React, { Component } from 'react';

class TaskList extends Component {
  state = {
    text: '',
    date: new Date().toISOString().slice(0, 10),
    minDate: new Date().toISOString().slice(0, 10),
  }

  daysLeft = new Date().toISOString().slice(0, 10);

  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleButton = (e) => {
    e.preventDefault();
    if (this.state.text) {
      this.props.addTask(this.state.text, this.state.date);
      this.setState({
        text: ''
      })
    } else {
      alert('The field is empty!')
    }
  }

  handleActive = (e) => {
    const text = e.target.parentNode.textContent.replace(` DoneX`, "");
    this.props.changeActive(text)
  }

  deleteTask = (e) => {
    const text = e.target.parentNode.textContent.replace(` DoneX`, "");
    this.props.deleteTask(text)
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  render() {
    let tasks = [...this.props.tasks];
    tasks = tasks.filter(task => task.active);
    tasks.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a > b) return 1
      if (a < b) return -1
      if (a === b) return 0
      else return null
    });
    return (
      <>
        <form className='form' action="" onSubmit={this.handleButton}>
          <label htmlFor='myGoal'>What is your goal?</label> <input id='myGoal' className='form__input' placeholder='My goal...' value={this.state.text} type="text" onChange={this.handleInput} />
          <button className='button--form'>Add goal</button>
          <label htmlFor='date'>Until when do you want to do this?</label>
          <input id='date' className='form__date' onChange={this.handleDate} value={this.state.date} min={this.state.minDate} max={`${this.state.minDate.slice(0, 4) * 1 + 5}-12-31`} type="date" />
        </form>
        <div className="tasks">
          <h1>MY GOALS</h1>
          <div className='tasksToDo'>
            {tasks.map(task => {
              const days = (Number(new Date(task.date)) - Number(new Date(this.daysLeft))) / 1000 / 60 / 60 / 24;
              return (
                <div key={task.id} className='tasksToDo__taskToDo'><div>{task.text} by {task.date} <button className='button--done' onClick={this.handleActive}>Done</button><button className='button--X' onClick={this.deleteTask}>X</button></div><p className={days > 0 ? 'green' : 'red'}>{days > 0 ? days : 0} days left</p></div>
              )
            })}
          </div>
        </div>
      </>
    );
  }
}

export default TaskList;