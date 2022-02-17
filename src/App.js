import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Apoinment from "./pages/Apoinment/Apoinment/Apoinment";
import Login from "./pages/Login/Login/Login";

import { createContext, useState } from "react";

export const userContext = createContext();

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <userContext.Provider value={[date, setDate]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apoinment" element={<Apoinment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
