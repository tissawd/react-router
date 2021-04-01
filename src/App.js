import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar">
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/view-cart">View Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
