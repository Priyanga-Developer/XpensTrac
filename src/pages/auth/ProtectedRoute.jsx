import React ,{useContext}from 'react';
import { Navigate } from 'react-router-dom';
import DataContext from '../../hooks/DataContext';

const ProtectedRoute = ({children}) => {
    let {user}=useContext(DataContext);
 
    if(!user){
       return <Navigate to="/"/>;
    }
  return children;
};

export default ProtectedRoute;