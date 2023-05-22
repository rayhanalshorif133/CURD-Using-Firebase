// import './App.css'
import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
