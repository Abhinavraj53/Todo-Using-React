import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        if (newText.trim()) {
            dispatch(editTask(task.id, newText));
            setIsEditing(false);
        }
    };

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <button onClick={handleToggle}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
};

export default Task;
