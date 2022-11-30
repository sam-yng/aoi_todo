import React, { useState } from 'react';
import { addTrackers } from 'react-ga';
import '../css/global.css';
import Plus from '../assets/images/plus.png'


export function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!value) return;

        addTask(value);
        setValue("");
    }

    return (
        <div className="flex ">
            <form
                onSubmit={handleSubmit}
                className='flex'>


                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="h-[5vh] text-gray-500 text-center w-[6.5vw] hover:bg-gray-100 rounded-xl"
                    placeholder="Add Item"
                />
                <button
                    type='submit'
                    className='ml-2'>
                    <img className="h-4 mb-1 inline-block" src={Plus} />
                </button>
            </form>
        </div>
    );
}


function Task({ task }) {
    return (
        <div>
            {task.title}
        </div>
    );
}

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Finish todo list",

        },
    ]);

    const addTask = (title: any) => {
        const newTasks = [...tasks, { title }];
        setTasks(newTasks);
    };

    return (
        <div>
            <div>
                {tasks.map((task, index) => (
                    <Task
                        task={task}

                    />
                ))}
            </div>

        </div>
    );
}

export default Todo;
