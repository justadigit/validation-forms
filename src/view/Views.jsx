import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseEnrolmentForm from '../components/forms/CourseEnrolmentForm';
import LoginForm from '../components/forms/LoginForm';
import PaymentForm from '../components/forms/PaymentForm';
import RegisterForm from '../components/forms/RegisterForm';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
function Views() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/enroll" element={<CourseEnrolmentForm />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Views;
