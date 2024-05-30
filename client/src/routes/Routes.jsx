import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
// import { element } from 'prop-types'
import Dashboard from '../layouts/Dashboard'
import Statistics from '../pages/Common/Statistics'
import AddRoom from '../pages/Host/AddRoom'
import MyListings from '../pages/Host/MyListings'
import Profile from '../pages/Common/Profile'
import ManageUsers from '../pages/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Statistics></Statistics>,
      },
      {
        path: "add-room",
        element: <AddRoom></AddRoom>,
      },
      {
        path: "my-listings",
        element: <MyListings></MyListings>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
