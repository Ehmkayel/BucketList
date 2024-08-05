import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";
import Package from "./pages/Packages/Package.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "package",
        element: <Package/>
      },
      
    ],
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
