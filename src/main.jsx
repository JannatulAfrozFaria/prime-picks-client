import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
     </AuthProvider>
  </StrictMode>,
)
