import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
    <ToastContainer/>
      <div className='min-h-screen bg-slate-50'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App