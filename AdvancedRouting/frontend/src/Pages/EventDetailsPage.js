import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const params=useParams();
  return (
    <>
        <div>EventDetailsPage</div>
        <p> Events Id: {params.id}</p>
    </>
  )
}

export default EventDetailsPage