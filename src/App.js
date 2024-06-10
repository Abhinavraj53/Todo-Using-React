import React from 'react';
import TaskInput from './components/Tasinput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>To-Do Application</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
