import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/authentication/login";
import Lounge from "./pages/lounge";
import Background from "./layouts/background";
import { getLocalStorageItem } from "./utils/getLocalStorage";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const userToken = getLocalStorageItem("userToken");

  return userToken === undefined ? <Navigate to="/" /> : <Outlet />;
};

export default function App() {
  return (
    <div className="flex flex-col p-1 items-center justify-center font-lancelot h-screen bg-[#2C2C34]">
      <Background />
      <div className="z-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/lounge"
            element={
              <PrivateRoute>
                <Lounge />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
