import React from 'react';


interface Props {
  id: string;
  task: string;
  onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({task, onDeleteTask}) => {
  return (
    <div className="Task">
      <p>{task}</p>
      <button onClick={onDeleteTask}>Clear</button>

    </div>
  );
};

export default Task;