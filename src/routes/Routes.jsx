import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import TouristSpot from "../pages/TouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/touristsSpot`)
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
          element: <TouristSpot></TouristSpot>,
          loader: ()=> fetch('../country.json')
        }
    ]
  },
]);

export default router
