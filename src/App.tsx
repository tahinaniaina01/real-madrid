import { Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductsList from "./pages/ProductsLists";
import ShopByPlayer from "./pages/ShopByPlayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/shopByPlayer" element={<ShopByPlayer />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/products/:productType" element={<ProductsList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
