import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';


const Layout = ({ children }) => {

  return (
  <>
  <head>
  <title>MetroHacks EmpowHer</title>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <link rel="apple-touch-icon" sizes="180x180" href="empowher-assets/img/favicon_io/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="empowher-assets/img/favicon_io/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="empowher-assets/img/favicon_io/favicon-16x16.png" />
  <link rel="manifest" href="empowher-assets/img/favicon_io/site.webmanifest" />

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />

  <link href="empowher-assets/fontawesome/css/all.css" rel="stylesheet" />
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
  </head>

  <main id="app" className="d-flex flex-column h-100" data-testid="layout">
  <NavBar />
  {children}
  <Footer />
  </main>
  </>
  )
  
  };

export default Layout;