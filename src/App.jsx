import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Shop from './pages/shop/shop';
import Nav from './components/Nav';
import { CartProvider } from './context/CartContext';

function App(){
  return (
      <Router>
      <CartProvider>
        <Nav />
        
        <Routes>
          <Route path='/'  element={<Shop/>} />
        </Routes>

      </CartProvider>
      </Router>
  );
}

export default App
