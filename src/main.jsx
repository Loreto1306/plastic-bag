import React from 'react'
import ReactDOM from 'react-dom/client'
import './index_page.css'
import './index.css'
import App from './App.jsx'
import Equipe from './pages/Equipe.jsx'
import Cadastrar from './pages/Cadastrar.jsx'
import Projeto from './pages/Projeto.jsx'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  
  {
    path:"projeto",
    element:<Projeto/>
  },
  {
    path:"cadastrar",
    element:<Cadastrar/>
  },
  {
    path:"equipe",
    element:<Equipe/>
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

