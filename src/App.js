import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Apoinment from "./pages/Apoinment/Apoinment/Apoinment";
import Login from "./pages/Login/Login/Login";

import { createContext, useState } from "react";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivetRoute from "./pages/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import AddDoctors from "./pages/Dashboard/AddDoctors/AddDoctors";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";

export const userContext = createContext();

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <Toaster />
      <AuthProvider>
        <userContext.Provider value={[date, setDate]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/apoinment"
              element={
                <PrivetRoute>
                  <Apoinment />
                </PrivetRoute>
              }
            />
            {/* <Route path="/dashboard" element={<PrivetRoute>
              <Dashboard />
            </PrivetRoute>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="addDoctor"
                element={
                  <AdminRoute>
                    <AddDoctors />
                  </AdminRoute>
                }
              />
              <Route path="patient" element={<DashboardHome />} />
            </Route>
            <Route path="/register" element={<Register />} />
          </Routes>
        </userContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
