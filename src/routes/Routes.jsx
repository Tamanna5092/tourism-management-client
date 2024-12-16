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
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";

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
          element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
        },
        {
          path: '/touristsSpot/:id',
          element: <PrivateRoute><CountryDetails></CountryDetails></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/touristsSpot/${params.id}`)
        },
        {
          path: '/myListedSpots',
          element: <PrivateRoute><MyListedSpots></MyListedSpots></PrivateRoute>
        },
        {
          path: '/allTouristSpots',
          element: <AllTouristSpots></AllTouristSpots>
        },
        {
          path: '/updateTouristSpot/:id',
          element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/touristsSpot/${params.id}`)
        },
        {
          path: '/guideInfo/:id',
          element: <GuideInfo></GuideInfo>,
          loader: ()=> fetch('../guides.json')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
    ]
  },
]);

export default router
