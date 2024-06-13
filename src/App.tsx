import { Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
