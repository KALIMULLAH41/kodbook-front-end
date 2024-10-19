import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";

import Index from "./pages/index";

import SignUp from "./pages/signUp";

import NewPost from "./pages/newPost";

import Profile from "./pages/profile";

import EditProfile from "./pages/editProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="home" element={<Home />} />
      <Route path="openSignUp" element={<SignUp />} />
      <Route path="openNewPost" element={<NewPost />} />
      <Route path="openProfile" element={<Profile />} />
      <Route path="openEditProfile" element={<EditProfile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
