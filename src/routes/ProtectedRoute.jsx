import {useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { Navigate } from 'react-router'; 

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  
  return user ? children : <Navigate to='/login' />
}
