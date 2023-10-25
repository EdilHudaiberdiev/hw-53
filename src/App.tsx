import React, { useState } from 'react'
import './App.css'
import Task from './Task.tsx';

interface Task {
  id: string;
  task: string;
}

const App = () => {
  const [taskInput, setTaskInput] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([
    {id: '455', task: 'buy milk'},
    {id: '456', task: 'buy potato'}
  ]);

  const onDeleteTask = (id: string) => {
    setTasks( tasks.filter(item=> item.id !== id));
  };

  const onAddTask = () => {
    setTasks(prevState => [...prevState, {task: taskInput, id: Math.random().toString()}]);
  };

  const togleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  return (
    <>
      <input value={taskInput} onChange={togleTask}/>
      <button onClick={onAddTask}>Add Task</button>

      {tasks.map(item => (
        <Task key={item.id} task={item.task} onDeleteTask={() => onDeleteTask(item.id)}/>
      ))}
    </>
  )
};

export default App
