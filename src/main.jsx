import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </div>
)
