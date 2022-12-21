import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = TASKS.map((task) =>
  {
    return { ...task };
  });

  const [tasksList, setTasksList] = useState(initialCopy);

  const updateComplete = (taskId, updatedComplete) =>
  {
    console.log('updateComplete called');
    const newTasksList = [];
    for (const task of tasksList)
    {
      if (task.id !== taskId)
      {
        newTasksList.push(task);
      } else
      {
        const newTask = {
          ...task,
          isComplete: updatedComplete,
        };
        newTasksList.push(newTask);
      }
    }
    setTasksList(newTasksList);
  };
  
  const deleteTask = (taskId) =>
  {
    console.log('deleteTask called');
    const newTaskList = [];
    for (const task of tasksList)
    {
      if (task.id != taskId)
      {
        newTaskList.push(task);
      }
    }
    setTasksList(newTaskList);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList
            tasks={tasksList}
            updateComplete={updateComplete}
            deleteTask={deleteTask}
          />}
        </div>
      </main>
    </div>
  );
};

export default App;
