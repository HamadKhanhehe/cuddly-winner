import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Account from "./Pages/account/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";


function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
