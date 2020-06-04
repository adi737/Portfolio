import React, { Component } from 'react';
import TaskList from './TaskList'
import CompletedTask from './CompletedTask'
import AppContainer from './AppContainer.css';

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [],
    counter: Number(localStorage.getItem('counter')) ? Number(localStorage.getItem('counter')) : 0
  }

  addTask = (text, date) => {
    const number = this.state.tasks.findIndex(task => task.text === text)

    if (number === -1) {
      this.task = {
        id: this.state.counter,
        text,
        active: true,
        date
      }
      console.log(this.state.counter);

      this.setState({
        tasks: [...this.state.tasks, this.task],
        counter: this.state.counter + 1
      }, () => {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        localStorage.setItem('counter', (this.state.counter))
      })
    } else alert('This task has already been added!')
  }

  deleteTask = (text) => {
    const indexOfTask = this.state.tasks.findIndex(task => `${task.text} by ${task.date}` === text)
    const newTasks = [...this.state.tasks];
    newTasks.splice(indexOfTask, 1);

    this.setState({
      tasks: newTasks
    }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
  }

  changeActive = (text) => {
    const indexOfTask = this.state.tasks.findIndex(task => `${task.text} by ${task.date}` === text);
    const newTasks = [...this.state.tasks];
    newTasks[indexOfTask].active = !newTasks[indexOfTask].active;
    newTasks[indexOfTask].finishDate = new Date().getTime();
    this.setState({
      tasks: newTasks
    }, () => localStorage.setItem('tasks', JSON.stringify(this.state.tasks)))
  }

  render() {
    return (
      <AppContainer>
        <TaskList
          tasks={this.state.tasks}
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          changeActive={this.changeActive}
        />
        <CompletedTask
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        />
      </AppContainer>
    );
  }
}

export default App;