import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {
  const { cartCount } = useCart();

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload(true);
  }
  
  return (
    <header className="header">
      <div className="logo">
        <h2>The Grand Oak</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/woods">Woods</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
          {localStorage.getItem('token') ? <li><a href="/account">Account</a></li> : ""}
          {localStorage.getItem('token') ? <li><a href="/cms">CMS</a></li> : <li><a href="/login">Login</a></li>}
        </ul>
      </nav>

      <Link to="/cart" className="cart-icon">
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>

      {localStorage.getItem('token') ? <button className="btn" onClick={() => handleLogout()}>Logout</button> : ""}
    </header>
  );
}

export default Header;