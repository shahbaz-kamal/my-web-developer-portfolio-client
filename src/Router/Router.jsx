import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import AddProject from "../Pages/AddProject/AddProject";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Pages/Home/ViewDetails";
import Message from "../Pages/Message/Message";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login-shahbaz-120096", element: <Login></Login> },
      {
        path: "/add-project",
        element: (
          <PrivateRoute>
            <AddProject></AddProject>
          </PrivateRoute>
        ),
      },
      { path: "/message", element: <Message></Message> },
      { path: "/view-details/:id", element: <ViewDetails></ViewDetails> },
    ],
  },
]);
