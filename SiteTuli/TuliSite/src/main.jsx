import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Especialista from './Pages/Especialista.jsx'
import QuemSomos from './Pages/QuemSomos.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Cadastro from './Pages/Cadastro.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: 'especialista', element: <Especialista/>},
        {path: 'especialista/:id', element: <Cadastro/>},
        {path: 'quemsomos', element: <QuemSomos/>},
        {path: '*', element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
