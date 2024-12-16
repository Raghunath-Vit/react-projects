
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventsPage ,{loader as eventsLoader} from "./Pages/EventsPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import NewEventPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import RootLayout from "./Pages/Root";
import EventRoot from "./Pages/EventRoot";
import Error from "./Pages/Error";
function App() {

  const router=createBrowserRouter([
    {path:"/",element:<RootLayout/>,
    errorElement:<Error/>,
    children:[
      {index:true,element:<HomePage/>},  // index:true is an alternative for path:" "
      {path:'events',element:<EventRoot/>,children:[
        {index:true, element:<EventsPage/>,loader:eventsLoader,},
        {path:":id",element:<EventDetailsPage/>},
        {path:":id/edit",element:<EditEventPage/>},
        {path:"new",element:<NewEventPage/>}
      ]},

    ]}
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
