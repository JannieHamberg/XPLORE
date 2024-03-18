import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import './Styles/main.scss'
import { FavoritesProvider } from './Models/FavoritesContext.tsx'
import WebFont from 'webfontloader';


const domain = import.meta.env.VITE_AUTH0_DOMAIN || '';
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || '';



WebFont.load({
  google: {
    families: ['Prompt:600']
  }
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <FavoritesProvider>
         <RouterProvider router={router} />
        </FavoritesProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
