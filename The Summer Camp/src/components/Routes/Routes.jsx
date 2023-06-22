import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx/Layout";
import Home from "../Home/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import SignUp from "../SignUP/SignUp";
import Login from "../Login/Login";
import InstructorsPage from "../InstructorsPage/InstructorsPage";
import ClassesPage from "../ClassesPage/ClassesPage";
import DashBoard from "../Layout.jsx/DashBoard";
import MyClass from "../DashBoard/MyClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
    ],
  },
  {
    path: "dashBoard",
    element: <DashBoard></DashBoard>,
    children:[
      {
        path:'myClass',
        element:<MyClass></MyClass>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
