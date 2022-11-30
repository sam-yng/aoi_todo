import React, { useCallback } from 'react'
import { useState } from 'react';
import Plus from "../assets/images/plus.png";


function CreateTask({ addTask }) {
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

