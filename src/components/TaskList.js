import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index + 1} />
            ))}
        </div>
    );
};

export default TaskList;
