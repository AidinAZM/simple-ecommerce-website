import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/shop/shop";
import { CartProvider } from "./context/CartContext";
import NotFound404 from "./components/NotFound404";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
