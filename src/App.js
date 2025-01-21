import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/about/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import OrderPage from './pages/orders/OrderPage';
import OrderDetailPage from './pages/orders/OrderDetailPage';
import QuestionsPage from './pages/questions/QuestionsPage';
import ProductPage from './pages/products/ProductPage';
import ProductFormPage from './pages/products/ProductFormPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/new" element={<ProductFormPage />} />
          <Route path="/products/:productId/edit" element={<ProductFormPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
