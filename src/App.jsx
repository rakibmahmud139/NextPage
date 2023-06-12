import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* header */}
      <Header />

      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
