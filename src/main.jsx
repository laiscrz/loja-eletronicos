import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from './Router/Home/index.jsx'
import Error from './Router/Error/Error.jsx'
import Aparelhos from './Router/Aparelhos/aparelhos.jsx'
import VisualizarAparelho from './Router/VisualizarAparelho/visualizarAparelho.jsx'

import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {        
        path:'/',
        element: <Home/>

      },
      {
        path: '/Aparelhos',
        element: <Aparelhos/>

      },
      {
        path: '/VisualizarAparelho/:id',
        element: <VisualizarAparelho/>

      },
      {
        path: '/antiga',
        element: <Navigate to='/'/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
