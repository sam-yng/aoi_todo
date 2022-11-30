import React, { useState } from "react"
import { Helmet } from 'react-helmet'
import '../css/global.css';
import Plus from "../assets/images/plus.png";
import { ProList, ComList, BacList } from '../components/list'

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
        {/*
        <button
          type='submit'
          className='ml-2'>
          <img className="h-4 mb-1 inline-block" src={Plus} />
        </button>
        */}
      </form>
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

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  function Task({ task }) {
    return (
      <div
        className='text-[18px] ml-2 hover:cursor-pointer'>
        {task.title}


        <img
          src={Plus}
          className="h-4 ml-4 inline-block rotate-45"
          onClick={removeTask} >

        </img>

      </div>
    );
  }

  return (
    <div>
      <div>
        <CreateTask addTask={addTask} />
      </div>

      <div className="flex flex-row justify-between">
        <div className='font-interreg text-[22px] mt-4 flex-col w-full'>
          <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            Backlog
          </h1>

          <div
            draggable="true"

          >
            {tasks.map((task, index) => (
              <Task
                task={task}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className='font-interreg text-[22px] mt-4 flex-col w-full'>
          <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            In Progress
          </h1>
        </div>

        <div className='font-interreg text-[22px] mt-4 flex-col w-full'>
          <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            Completed
          </h1>
        </div>

      </div>



    </div>
  );
}

const IndexPage = () => (
  <>
    <Helmet>
      <title>Aoi Todo</title>

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin='true'
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;400&display=swap"
        rel="stylesheet"
      />


      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    </Helmet>


    <body className="max-h-screen min-h-screen ml-20 max-w-[50%]">

      <div className="flex flex-row pt-8 pb-6">
        <h1 className="font-interreg text-[50px] animate-shake">
          Aoi To/do
        </h1>
      </div>


      <Todo />

    </body>


  </>
)

export default IndexPage