import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { apiKeySelector } from "../store/apiKeySlice";

export default function PrivateRoute({children}) {
  const apiKey = useSelector(state => apiKeySelector(state))
    
  if(!apiKey){
    return <Navigate to="key"></Navigate>
  }

  return children
}
