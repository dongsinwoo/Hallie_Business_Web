import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/dashborad/MainPage';
import OrderPage from './pages/orders/OrderPage';
import ProductPage from './pages/products/ProductPage';
import OrderDetailPage from './pages/orders/OrderDetailPage';
import ProductFormPage from './pages/products/ProductFormPage';
import QuestionsPage from './pages/questions/QuestionsPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailPage />} />
          <Route path="/products/new" element={<ProductFormPage />} />
          <Route path="/products/:productId/edit" element={<ProductFormPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
