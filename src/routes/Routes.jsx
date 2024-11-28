import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import CountryDetails from "../pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/addTourisSpot',
          element: <AddTouristSpot></AddTouristSpot>,
          loader: ()=> fetch('../country.json')
        },
        {
          path: '/touristsSpot/:id',
          element: <CountryDetails></CountryDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/touristsSpot/${params.id}`)
        }
    ]
  },
]);

export default router
