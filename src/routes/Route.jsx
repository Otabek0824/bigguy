import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { useContext, useEffect } from "react"
import Home from "../pages/Home"
import Layout from "../somethings/Layout"
import Baset from "../pages/Baset"
import Dynamicpage from "../pages/dynamicpage"
import Smartfonlar from "../pages/Smartfonlar"
import Noutbook from "../pages/noutbuk va kompyuterlar"
import Projecter from "../pages/Contact"
import Audiotexnikalar from "../pages/Audiotexnikalar"
import Technology from "../pages/Uy uchun texnika"
import Techforkitchen from "../pages/techforkitchen"
import Beauty from "../pages/Beauty"
import Clever from "../pages/clever"
import Next from "../pages/next"
import DiscountMicPage from "../Dynamicpages/discountmicpage"
import Interestmicpage from "../Dynamicpages/Interestmicpage"
import Auth from "../pages/Auth"
import Login from "../Authform/Login"
import Register from "../Authform/Register"
import { AuthContext } from "../context/AuthContext"

const privateRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/smartfonlar",
        element: <Smartfonlar />,
      },
      {
        path: "/products/:id",
        element: <Dynamicpage />,
      },
      {
        path: "/projecter",
        element: <Projecter />,
      },
      {
        path: "/baset",
        element: <Baset />,
      },
      {
        path: "/noutbook",
        element: <Noutbook />,
      },
      {
        path: "/audiotexnikalar",
        element: <Audiotexnikalar />,
      },
      {
        path: "/Technology",
        element: <Technology />,
      },
      {
        path: "/techforkitchen",
        element: <Techforkitchen />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/clever",
        element: <Clever />,
      },
      {
        path: "/next",
        element: <Next />,
      },
      {
        path: "/chegirma/:id",
        element: <DiscountMicPage />,
      },
      {
        path: "/interest/:id",
        element: <Interestmicpage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>hey get out of here</h1>,
  },
])

const publicRoute = createBrowserRouter([
  {
    path: "*",
    element: localStorage.getItem("token") ? <Navigate to="/" /> : <Auth />,
    children: [
      {
        path: "*",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
])

const Routers = () => {
  const { isAuth } = useContext(AuthContext)

  return <RouterProvider router={isAuth ? privateRoute : publicRoute} />
}

export default Routers
