import React, { useState } from "react"
import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className="bg-gray-200 w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white px-[20px] rounded-[10px] py-[10px]">
          <Outlet/> 
        </div>
      </div>
    </div>
  )
}

export default Auth
