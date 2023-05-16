import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import Home from "./routes/Home/Home.jsx"
import Login from "./routes/Login/Login.jsx"
import Registro from './routes/Registro/Registro.jsx'
import Historico from './routes/Historico/Historico.jsx'




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "login",
//     element: <Login/>
//   },
// ]);

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "registro",
        element: <Registro/>
      },
      {
        path: "historico",
        element: <Historico/>
      },
      ]
    
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
