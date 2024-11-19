import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../component/Home";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
    ]
  },
]);

export default router
