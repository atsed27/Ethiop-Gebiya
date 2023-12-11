import './index.css';
import Cart from './page/Cart';
import Home from './page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './page/ProductList';
import Products from './page/Products';
import Register from './page/Register';
import Login from './page/Login';
import Pay from './page/Pay';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="products/:category" element={<ProductList />} />
          <Route path="product/:id" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="pay" element={<Pay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
