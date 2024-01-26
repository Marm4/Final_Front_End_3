import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Contact from './Contact';
import Favs from './Favs';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;