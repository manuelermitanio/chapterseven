import { BrowserRouter, Routes, Route } from 'react-router';
import Login from "../views/Login";
import Signup from "../views/Signup";
import Homepage from "../views/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import ResetPassword from '../views/ResetPassword';
import AboutUs from "../views/AboutUs";
import NotFound from '../views/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
         <Route
          path='/aboutus'
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
