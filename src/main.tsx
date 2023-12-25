import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import Navbar from './components/Navbar/Page'
import Home from './components/Home/Page'
import About from './components/About/Page'
import Menu from './components/Menu/Page'
import Dashboard from './components/Dashboard/Page'
import Map from './components/Map/Page'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <Navbar />
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)
