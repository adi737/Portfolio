import React from 'react';

const CompletedTask = props => {
  let tasks = [...props.tasks];
  tasks = tasks.filter(task => !task.active);
  tasks.sort((a, b) => b.finishDate - a.finishDate);

  const deleteTask = (e) => {
    const text = e.target.parentNode.textContent.replace(`X${e.target.nextSibling.textContent}`, '');
    props.deleteTask(text);
  }

  return (
    <div className="tasks-done">
      <h1>GOALS ACHIEVED</h1>
      <div className='achieved-goals'>
        {tasks.map(task =>
          <div className='achieved-goals__goal' key={task.id}>{task.text} by {task.date}
            <button onClick={deleteTask} className='button--X'>X
            </button>
            <p>The goal was reached  {new Date(task.finishDate).toLocaleString()}
            </p>
          </div>)}
      </div>
    </div>
  );
}

export default CompletedTask;