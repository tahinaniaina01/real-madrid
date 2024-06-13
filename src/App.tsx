import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
