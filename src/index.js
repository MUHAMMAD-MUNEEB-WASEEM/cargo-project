import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './authScreens/loginScreen/LoginScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import SignupScreen from './authScreens/signupScreen/SignupScreen';
import SignupChoice from './authScreens/signupChoice/SignupChoice';
import SignupDriver from './authScreens/signupDriver/SignupDriver';
import ForgotPassword from './authScreens/forgotPassword/ForgotPassword';
import ResetPassword from './authScreens/resetPassword/ResetPassword';
import CargoEstimate from './authScreens/cargoEstimate/CargoEstimate';
import DriverDetail from './authScreens/driverDetail/DriverDetail';
import DriversRequirement from './authScreens/driversRequirement/DriversRequirement';
import UploadClient from './authScreens/uploadClient/UploadClient';
import UploadDriver from './authScreens/uploadDriver/UploadDriver';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  {
    path: "/signup",
    element: <SignupScreen/>,
  },
  {
    path: "/choice",
    element: <SignupChoice/>,
  },
  {
    path: "/driver",
    element: <SignupDriver/>,
  },
  {
    path: "/forgot",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset",
    element: <ResetPassword/>,
  },
  {
    path: "/estimate",
    element: <CargoEstimate/>,
  },
  {
    path: "/driverdetail",
    element: <DriverDetail/>,
  },
  {
    path: "/uploadclient",
    element: <UploadClient/>,
  },
  {
    path: "/uploaddriver",
    element: <UploadDriver/>,
  },
  {
    path: "/terms",
    element: <DriversRequirement/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
