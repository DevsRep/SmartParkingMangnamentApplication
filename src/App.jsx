// import { useState } from 'react'
// import './App.css'
// import Login from './login'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Login/>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import ProfileMang from "./pages/profileMang";
import MainHome from "./pages/mainHome";
import NotFound404 from "./pages/notFound404";
import AdminDash from "./pages/AdminDash";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<MainHome />} />
            <Route path="/home/profile" element={<ProfileMang />} />
          </Route>
          <Route path="/admin" element={<AdminDash />}>
            <Route path="/adminhome" element={<Dashboard />} />
            <Route path="/admin" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
