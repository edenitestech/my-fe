// import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthProvider'

// export default function PrivateRoute({ children }) {
//   const { user } = useAuth()
//   return user ? children : <Navigate to="/login" replace />
// }
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';  // <-- matches export above

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login, preserve where we came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
