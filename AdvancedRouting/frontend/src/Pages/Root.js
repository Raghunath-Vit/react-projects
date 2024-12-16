import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
// import { useNavigation } from 'react-router-dom'


// React router-dom has useNavigation hook which helps us to konw about the state either it is loading or idle.

const RootLayout = () => {
  // const navigate=useNavigation();
  
  return (
    <>
        <MainNavigation/>
        <Outlet/>
    </>
  )
}

export default RootLayout