import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"
import Basket from "../pages/Basket"
import Layout from "../Layout"

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
])

const Routers = () => {
  return <RouterProvider router={route} />
}

export default Routers
