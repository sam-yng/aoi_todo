import React from "react"
import { Helmet } from 'react-helmet'
import '../css/global.css';

import { TodoInput } from "../components/input";
import Plus from "../assets/images/plus.png";
import { List } from "../components/list";


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

    <body className="max-h-screen min-h-screen ml-20 max-w-[30%]">

      <div className="flex flex-row pt-8 pb-6">
        <h1 className="font-interreg text-[50px] animate-shake">
          Aoi To/do
        </h1>
      </div>

      <TodoInput />

      <div className="flex flex-row justify-between">
        <List
          title={"In Progress"}

        />

        <List
          title={"Completed"}

        />
      </div>

    </body>


  </>
)

export default IndexPage