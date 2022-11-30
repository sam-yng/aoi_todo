import React, { useState } from 'react';

function Task({ task }) {
    return (
        <div>
            {task.title}
        </div>
    );
}
function Todo() {
    const [tasks, setTasks] = useState([
        {}
    ]);
    return (

        <div className="tasks">
            {tasks.map((task, index) => (
                <Task
                    task={task}
                    index={index}
                    key={index}
                />
            ))}
        </div>

    );
}

export default Todo;