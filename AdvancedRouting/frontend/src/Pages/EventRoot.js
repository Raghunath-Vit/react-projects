import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'
const EventRoot = () => {
  return (
    <>
        <EventsNavigation/>
        <div>EventRoot</div>
        <Outlet/>
        {/* Outlet is used to render the child components of routes. */}
    </>
  )
}

export default EventRoot