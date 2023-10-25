import React, { useState } from 'react'
import './App.css'
import Task from './Task.tsx';

interface Task {
  id: string;
  task: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id: '455', task: 'buy milk'},
    {id: '456', task: 'buy potato'}
  ])

  const onDeleteTask = (id: string) => {
    console.log(id)
    setTasks( tasks.filter(item=> item.id !== id));
  }



  return (
    <>

      {tasks.map(item => (
        <Task key={item.id} task={item.task} onDeleteTask={() => onDeleteTask(item.id)}/>
      ))}
    </>
  )
};

export default App
