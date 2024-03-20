import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
      
      <Header  />
      <Outlet  />     {/* jata Outlet xa teta matra Dynamic change garna milxa HOME, ABOUT US, CONTACT US page bichna rakhna pauxa aba */}
      <Footer  />


    </>
  )
}

export default Layout
