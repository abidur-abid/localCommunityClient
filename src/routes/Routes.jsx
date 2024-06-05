import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../main pages/Home";
import Dashboard from "../layouts/Dashboard";
import Profile from "../dashboard pages/Profile";
import About from "../main pages/About";
import Contact from "../main pages/Contact";
import Overview from "../dashboard pages/Overview";
import Login from "../main pages/Login";
import Activities from "../main pages/Activities";
import News from "../main pages/News";
import Registration from "../main pages/Registration";
import AllNews from "../dashboard pages/AllNews";
import AddNews from "../dashboard pages/AddNews";
import UpdateNews from "../dashboard pages/UpdateNews";
import SingleNews from "../main pages/SingleNews";
import UpdateProfile from "../dashboard pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/activities",
          element: <Activities></Activities>
        },
        {
          path: "/news",
          element: <News></News>
        },
        {
          path: "/news/:id",
          element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`https://localcommunityserver.onrender.com/news/${params.id}`),

        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/dashboard/profile",
          element: <Profile></Profile>
        },
        {
          path: "/dashboard/profile/:id",
          element: <UpdateProfile></UpdateProfile>,
          loader: ({ params }) =>
            fetch(`https://localcommunityserver.onrender.com/users/${params.id}`),
        },
        {
          path: "/dashboard/overview",
          element: <Overview></Overview>
        },
        {
          path: "/dashboard/allnews",
          element: <AllNews></AllNews>
        },
        {
          path: "/dashboard/allnews/:id",
          element: <UpdateNews></UpdateNews>,
          loader: ({ params }) =>
            fetch(`https://localcommunityserver.onrender.com/news/${params.id}`),
        },
        {
          path: "/dashboard/addnews",
          element: <AddNews></AddNews>
        }
      ]
    }
   
  ]);