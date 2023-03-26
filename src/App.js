import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages";
import SignIn from "./pages/Signin/SignIn";
import Signup from "./pages/Signup/Signup";
import "./App.css";
import Movies from "./pages/Movie/Movies/Movies";
import Footer from "./components/Footer/Footer";
export const AuthProvider = createContext();
function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  useEffect(() => {
    setUserToken(localStorage.getItem("userToken"));
    //console.log(userToken);
  }, [userToken]);

  return (
    <AuthProvider.Provider value={{ userToken }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies/:query" element={<Movies />} />
      </Routes>
      <Footer />
    </AuthProvider.Provider>
  );
}

export default App;
