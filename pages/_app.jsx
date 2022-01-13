import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

import Layout from '../components/Layout';


import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
//import './styles.css';

initFontAwesome();

import './appstyles.css'
export default function App({ Component, pageProps }) {
  return (
    <>
    
    <UserProvider>
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <link rel="apple-touch-icon" sizes="180x180" href="empowher-assets/img/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="empowher-assets/img/favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="empowher-assets/img/favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="empowher-assets/img/favicon_io/site.webmanifest"></link>

          <link href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
          <link href="https://github.com/MetroHacks/EmpowHer/blob/2d3ec9d0acea37657c0e5f7c835d9139a8f7cd84/empowher-assets/fontawesome/css/all.css" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

        </head>

        <script src = "https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous" />
        <script src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous" />
          
      
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
  );
}
