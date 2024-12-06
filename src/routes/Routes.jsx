import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import CountryDetails from "../pages/CountryDetails";
import MyListedSpots from "../pages/MyListedSpots";
import AllTouristSpots from "../pages/AllTouristSpots";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import ErrorPage from "../pages/ErrorPage";
import GuideInfo from "../pages/GuideInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: ()=> fetch('../guides.json')
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
          element: <AddTouristSpot></AddTouristSpot>
        },
        {
          path: '/touristsSpot/:id',
          element: <CountryDetails></CountryDetails>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/touristsSpot/${params.id}`)
        },
        {
          path: '/myListedSpots',
          element: <MyListedSpots></MyListedSpots>
        },
        {
          path: '/allTouristSpots',
          element: <AllTouristSpots></AllTouristSpots>
        },
        {
          path: '/updateTouristSpot/:id',
          element: <UpdateTouristSpot></UpdateTouristSpot>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/touristsSpot/${params.id}`)
        },
        {
          path: '/guideInfo/:id',
          element: <GuideInfo></GuideInfo>,
          // loader: ({params})=> fetch(`../guides.json/guideInfo/${params.id}`)
          loader: ()=> fetch('../guides.json')
        }
    ]
  },
]);

export default router
